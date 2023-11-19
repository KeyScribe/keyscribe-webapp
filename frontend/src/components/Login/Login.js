import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

   const inputStyle = {
      marginBottom: '15px', // Increase the margin-bottom as needed for the input fields
   };

   const labelStyle = {
      marginBottom: '15px', // Increase the margin-bottom as needed for the labels
   };

   return (
      <div>
         <div style={inputStyle}>
         <label style={labelStyle}>Username: </label>
         <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         </div>
         <div style={inputStyle}>
         <label style={labelStyle}>Password: </label>
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? handleLogin() : ''}
         />
         </div>
         <div style={inputStyle}>
         <button onClick={handleLogin} onKeyDown={e => e.key === 'Enter' ? handleLogin() : ''}>Login</button>
         </div>
      </div>
   );
};

export default Login;
