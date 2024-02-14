import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SettingsWrapper, ListWrapper, Input, NavBar, Button, Card, CardButtonWrapper } from './Settings.styled';

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

   const [showBoardCard, setBoardShowCard] = useState(false);
   const [showFriendCard, setFriendShowCard] = useState(false);
   const isCardOpen = showBoardCard || showFriendCard;

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

   const [boardData, setBoardData] = useState({
      boardName: '',
      boardId: '',
   });

   const handleBoardChange = (e) => {
      const { name, value } = e.target;
      setBoardData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
      };

   const confirmBoard = async () => {
      console.log('Board Data Submitted:', boardData);
      try {
         const response = await fetch(`${apiURL}/claim`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(boardData),
         });
         console.log(response);
      } catch(error) {
         console.error("Error adding board:", error);
      }
   };

   const [friendData, setFriendData] = useState({
      friendName: '',
      friendEmail: '',
   });

   const handleFriendChange = (e) => {
      const { name, value } = e.target;
      setFriendData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
      };

   const confirmFriend = async () => {
      console.log('Friend Data Submitted:', friendData);
      try {
         const response = await fetch(`${apiURL}/friend`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(friendData),
         });
         console.log(response);
      } catch(error) {
         console.error("Error adding friend:", error);
      }
   };

   return (
      <SettingsWrapper className='settings-wrapper'>
         <NavBar className='nav-bar'>
            <Button type='button' top='0px' bg='#B8DBD9' txt='#0E0F19' hbg='#97c2bf' onClick={handleBackWelcome}>Back to Welcome</Button>
         </NavBar>
         <ListWrapper className='user-list'>
            <h1>My Info</h1>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Username: {username}</p>
            <p>Email: {emailaddress}</p>
            <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4'>Edit</Button>
         </ListWrapper>
         <ListWrapper className='boards-list'>
            <h1>My Boards</h1>
            <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4' onClick={openBoardCard} disabled={isCardOpen}>Add Board</Button>
         </ListWrapper>
         <ListWrapper className='friends-list'>
            <h1>My Friends</h1>
            <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4' onClick={openFriendCard} disabled={isCardOpen}>Add Friend</Button>
         </ListWrapper>

         {showBoardCard && (
            <Card raised='true'>
               <h2>Add Board</h2>
               <Input
                  type="text" 
                  name="boardName"
                  placeholder="Board Name"
                  value={boardData.boardName}
                  onChange={handleBoardChange}
               />
               <Input
                  type="text" 
                  name="boardId"
                  placeholder="Board ID"
                  value={boardData.boardId}
                  onChange={handleBoardChange}
               />
               <CardButtonWrapper>
                  <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4' onClick={closeBoardCard}>Cancel</Button>
                  <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4' onClick={confirmBoard}>Confirm</Button>
               </CardButtonWrapper>
            </Card>
         )}

         {showFriendCard && (
            <Card>
               <h2>Add Friend</h2>
               <Input
                  type="text" 
                  name="friendName"
                  placeholder="Friend Name"
                  value={friendData.friendName}
                  onChange={handleFriendChange}
               />
               <Input
                  type="text" 
                  name="friendEmail"
                  placeholder="Friend Email"
                  value={friendData.friendEmail}
                  onChange={handleFriendChange}
               />
               <CardButtonWrapper>
                  <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4' onClick={closeFriendCard}>Cancel</Button>
                  <Button type='button' top='auto' bg='#5F758E' txt='#F1EDED' hbg='#8da7c4' onClick={confirmFriend}>Confirm</Button>
               </CardButtonWrapper>
            </Card>
         )}
      </SettingsWrapper>
   );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
