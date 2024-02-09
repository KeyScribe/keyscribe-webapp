import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SettingsWrapper, ListWrapper, CardWrapper, InputWrapper, FormWrapper, NavBar, Button } from './Settings.styled';
import { Input } from '../Login/Login.styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FormField } from '../CreateAccount/CreateAccount.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Settings = () => {
   const navigate = useNavigate();
   const [name, setName] = useState('');
   const [username, setUsername] = useState('');
   const [emailaddress, setEmailAddress] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${apiURL}/getUserInfo`);
            const data = await response.json();
            setName(data.first);
            setUsername(data.user);
            setEmailAddress(data.email);
         } catch(error) {
            console.error(error);
         }
      };
      fetchData();
   }, []);

   const handleBackWelcome = async () => {
      navigate('/welcome');
   }

   const [showBoardCard, setBoardShowCard] = useState(false);
   const [showFriendCard, setFriendShowCard] = useState(false);

   const openBoardCard = async () => {
      setBoardShowCard(true);
   };

   const closeBoardCard = async () => {
      setBoardShowCard(false);
   };

   const openFriendCard = async () => {
      setFriendShowCard(true);
   };

   const closeFriendCard = async () => {
      setFriendShowCard(false);
   };

   return (
      <SettingsWrapper className='settings-wrapper'>
         <NavBar className='nav-bar'>
            <Button bg='#B8DBD9' txt='#0E0F19' onClick={handleBackWelcome}>Back to Welcome</Button>
         </NavBar>
         <ListWrapper className='user-list'>
            <h1>My Info</h1>
            <p>First Name: {name}</p>
            <p>Last Name: </p>
            <p>Username: {username}</p>
            <p>Email: {emailaddress}</p>
            <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED'>Edit</Button>
         </ListWrapper>
         <ListWrapper className='boards-list'>
            <h1>My Boards</h1>
            <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' onClick={openBoardCard}>Add Board</Button>
         </ListWrapper>
         <ListWrapper className='friends-list'>
            <h1>My Friends</h1>
            <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' onClick={openFriendCard}>Add Friend</Button>
         </ListWrapper>

         {showBoardCard && (
            <CardWrapper>
               <Card>
                  <CardContent>
                     <h2>Add Board</h2>
                     <FormWrapper>
                        <FormField>
                           <InputWrapper>
                              <Input
                                 type="text" 
                                 name="boardName"
                                 placeholder="Board Name" 
                              />
                           </InputWrapper>
                           <InputWrapper>
                              <Input
                                 type="text" 
                                 name="boardId"
                                 placeholder="Board ID"
                              />
                           </InputWrapper>
                        </FormField>
                     </FormWrapper>
                     <Button type='button' onClick={closeBoardCard}>Cancel</Button>
                     <Button type='button'>Confirm</Button>
                  </CardContent>
               </Card>
            </CardWrapper>
         )}

         {showFriendCard && (
            <CardWrapper>
               <Card>
               <CardContent>
                     <h2>Add Friend</h2>
                     <FormWrapper>
                        <FormField>
                           <InputWrapper>
                              <Input
                                 type="text" 
                                 name="friendName"
                                 placeholder="Friend Name" 
                              />
                           </InputWrapper>
                        </FormField>
                     </FormWrapper>
                     <Button type='button' onClick={closeFriendCard}>Cancel</Button>
                     <Button type='button'>Confirm</Button>
                  </CardContent>
               </Card>
            </CardWrapper>
         )}
      </SettingsWrapper>
   );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
