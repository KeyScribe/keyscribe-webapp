import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeWrapper } from './Welcome.styled';
import { NavBar, Button } from '../../App.styled';

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
   }, []);

   const handleSettings = async () => {
      navigate('/settings');
   }

   return (
      <WelcomeWrapper data-testid="Welcome">
          <NavBar className='nav-bar'>
            <Button type='button' top='0px' bg='#B8DBD9' txt='#0E0F19' hbg='#97c2bf' onClick={handleSettings}>Settings</Button>
         </NavBar>
         <div>
            <h1>Welcome, {name}!</h1>
            <h1>Class: {}</h1>
            <h1>Selected Board: {}</h1>
         </div>
      </WelcomeWrapper>
   );
};

export default Welcome;
