import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to KeyScribe!</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome_teacher" element={<Keyboard />} />
          <Route path="/welcome_student" element={<Keyboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
