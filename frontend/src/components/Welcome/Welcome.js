import React, { useEffect, useState} from 'react';
import { TopContainer, CenterContainer, WelcomeWrapper, LogOutButton, JoinSessionButton, Background, SettingsButton, CreateSessionButton} from './Welcome.styled';
import { useAuth } from '../AuthContext/AuthContext'

const Welcome = () => {
   const [name, setName] = useState('');
   const { loading } = useAuth();

   useEffect(() => {
      // Read name from session storage, and call setName
      setName(sessionStorage.getItem('user.name'));
   }, []);

   if (loading) {
      return <div className='App'>Loading...</div>;
   }
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
