import React from 'react';
import PropTypes from 'prop-types';
import { SettingsWrapper, UserInfoWrapper, BoardsListWrapper, FriendsListWrapper } from './Settings.styled';
import { Button } from '../Login/Login.styled';

const Settings = () => {

   return (
      <SettingsWrapper>
         <UserInfoWrapper className='user-info-list'>
            <h1>User Information</h1>
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Username: </p>
            <p>Email: </p>
         </UserInfoWrapper>
         <BoardsListWrapper className='boards-list'>
            <h1>My Boards</h1>
            <Button type='button'>Add Board</Button>
         </BoardsListWrapper>
         <FriendsListWrapper className='friends-list'>
            <h1>My Friends</h1>
            <Button type='button'>Add Friend</Button>
         </FriendsListWrapper>
      </SettingsWrapper>
   );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
