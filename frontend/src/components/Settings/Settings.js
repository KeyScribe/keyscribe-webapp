import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SettingsWrapper, UserInfoWrapper, BoardsListWrapper, FriendsListWrapper, CardWrapper, InputWrapper, FormWrapper } from './Settings.styled';
import { Button, Input } from '../Login/Login.styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FormField } from '../CreateAccount/CreateAccount.styled';
import { BackWelcomeButton } from './Settings.styled';

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
      <SettingsWrapper>
         <UserInfoWrapper>
            <h1>User Information</h1>
            <p>First Name: {name}</p>
            <p>Last Name: </p>
            <p>Username: {username}</p>
            <p>Email: {emailaddress}</p>
         </UserInfoWrapper>
         <BoardsListWrapper>
            <h1>My Boards</h1>
            <Button type='button' onClick={openBoardCard}>Add Board</Button>
         </BoardsListWrapper>
         <FriendsListWrapper>
            <h1>My Friends</h1>
            <Button type='button' onClick={openFriendCard}>Add Friend</Button>
         </FriendsListWrapper>
         <BackWelcomeButton onClick={handleBackWelcome}>Back to Welcome</BackWelcomeButton>

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
