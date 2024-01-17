import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Background, LoginForm, FormField, Button, HeaderText, Input, CreateAccountButton} from './Login.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const handleLogin = async () => {
      try {
         const response = await fetch(`${apiURL}/login`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ username, password }),
         });
         if (response.status === 200) {
           console.log('Login successful');
           navigate('/welcome_teacher');
      } else {
           console.error('Login failed');
         }
       } catch (error) {
         console.error('Error during login', error);
       }
   }
   const handleCreateAccount = async () => {
      navigate('/create_account');
   }

   return (
      <Container>
         <Background />
         <LoginForm>
            <HeaderText>KeyScribe</HeaderText>
            <FormField>
               <Input 
                  type="text" 
                  placeholder="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
               />
            </FormField>
            <FormField>
               <Input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' ? handleLogin() : ''}
               />
            </FormField>
            <Button type="button" className="btn" onClick={handleLogin}>Login</Button>
            <CreateAccountButton onClick={handleCreateAccount}>Create Account</CreateAccountButton>
         </LoginForm>
      </Container>
   );
};

export default Login;
