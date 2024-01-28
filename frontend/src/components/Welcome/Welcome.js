import React, { useEffect, useState} from 'react';
import { WelcomeWrapper } from './Welcome.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Welcome = () => {
   const [name, setName] = useState('');

   useEffect(async () => {
      fetch(`${apiURL}/getUserInfo`)
         .then(response => response.json())
         .then(data => setName(data.name))
         .catch(error => console.error(error));
   }, []);

   return (
      <WelcomeWrapper data-testid="Welcome">
         <h1>Welcome {name}!</h1>
      </WelcomeWrapper>
   );
};

export default Welcome;
