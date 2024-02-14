import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SettingsWrapper, UserInfoWrapper, BoardsListWrapper, FriendsListWrapper } from './Settings.styled';
import { Button } from '../Login/Login.styled';
import { BackWelcomeButton } from './Settings.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Settings = () => {
   const navigate = useNavigate();
   const [first, setFirstName] = useState('');
   const [last, setLastName] = useState('');
   const [username, setUsername] = useState('');
   const [emailaddress, setEmailAddress] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${apiURL}/getUserInfo`);
            const data = await response.json();
            setFirstName(data.first);
            setLastName(data.last);
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

   return (
      <SettingsWrapper>
         <UserInfoWrapper className='user-info-list'>
            <h1>User Information</h1>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Username: {username}</p>
            <p>Email: {emailaddress}</p>
         </UserInfoWrapper>
         <BoardsListWrapper className='boards-list'>
            <h1>My Boards</h1>
            <Button type='button'>Add Board</Button>
         </BoardsListWrapper>
         <FriendsListWrapper className='friends-list'>
            <h1>My Friends</h1>
            <Button type='button'>Add Friend</Button>
         </FriendsListWrapper>
         <BackWelcomeButton onClick={handleBackWelcome}>Back to Welcome</BackWelcomeButton>
      </SettingsWrapper>
   );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
