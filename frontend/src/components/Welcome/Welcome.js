import React, { useEffect, useState} from 'react';
import { WelcomeWrapper } from './Welcome.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Welcome = () => {
   const [name, setName] = useState('');

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

   return (
      <WelcomeWrapper data-testid="Welcome">
         <h1>Welcome, {name}!</h1>
      </WelcomeWrapper>
   );
};

export default Welcome;
