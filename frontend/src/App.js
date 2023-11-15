import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Keyboard from './components/Keyboard/Keyboard';
import PianoKeyboard from './components/Keyboard/piano';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to KeyScribe!</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome_teacher" element={<PianoKeyboard />} />
          <Route path="/welcome_student" element={<PianoKeyboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
