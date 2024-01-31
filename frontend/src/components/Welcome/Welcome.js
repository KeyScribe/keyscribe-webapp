import React, { useEffect, useState} from 'react';
import { TopContainer, CenterContainer, WelcomeWrapper, LogOutButton, JoinSessionButton, Background, SettingsButton, CreateSessionButton} from './Welcome.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Welcome = () => {
   const [name, setName] = useState('');

   // const getName = async () => {
   // }

   useEffect(async () => {
      fetch(`${apiURL}/getuserinfo`)
         .then(response => response.json())
         .then(data => setName(data.name))
         .catch(error => console.error(error));
   }, []);

   return (
      <WelcomeWrapper data-testid="Welcome">
         <Background/>
         <TopContainer>
            <LogOutButton>Log Out</LogOutButton>
            <SettingsButton>Settings</SettingsButton>
         </TopContainer>
         <CenterContainer>
            <h1>Welcome, {name}!</h1>
            <JoinSessionButton>Join Session</JoinSessionButton>
            <CreateSessionButton>Create Session</CreateSessionButton>
         </CenterContainer>
      </WelcomeWrapper>
   );
};

export default Welcome;
