import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // Replace the following line with your actual authentication logic
    if (username === 'test' && password === 'test') {
      navigate('/welcome'); // Redirect to the welcome page
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
        />
      </div>
      <div style={inputStyle}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
