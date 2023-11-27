import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import PianoKeyboard from './components/Keyboard/piano';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
