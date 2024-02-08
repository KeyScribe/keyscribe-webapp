import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeWrapper, SettingsButton } from './Welcome.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Welcome = () => {
   const navigate = useNavigate();
   const [name, setName] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${apiURL}/getUserInfo`);
            const data = await response.json();
            setName(data.first);
         } catch(error) {
            console.error(error);
         }
      };
      fetchData();
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${apiURL}/getUserInfo`);
            const data = await response.json();
            setName(data.name);
         } catch(error) {
            console.error(error);
         }
      };
      fetchData();
   }, []);

   const handleSettings = async () => {
      navigate('/settings');
   }

   return (
      <WelcomeWrapper data-testid="Welcome">
         <h1>Welcome, {name}!</h1>
         <SettingsButton onClick={handleSettings}>Settings</SettingsButton>
      </WelcomeWrapper>
   );
};

export default Welcome;
