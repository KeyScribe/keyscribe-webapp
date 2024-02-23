import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import { WelcomeWrapper } from './Welcome.styled';
import { colors, NavBar, Button } from '../../App.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Welcome = () => {
   const { logout } = useAuth();
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

   const handleLogOut = async () => {
      logout(); // WARNING! Does not work yet
      navigate('/login');
   }

   return (
      <WelcomeWrapper data-testid="Welcome">
          <NavBar className='nav-bar'>
            <Button type='button' top='0px' bg={colors.med_bg} txt={colors.dark_txt} hbg={colors.light_hover} onClick={handleLogOut}>Log Out</Button>
            <Button type='button' top='0px' bg={colors.med_bg} txt={colors.dark_txt} hbg={colors.light_hover} onClick={handleSettings}>Settings</Button>
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
