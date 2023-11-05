import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';

const WelcomeTeach = () => <h1>Teacher Login</h1>;
const WelcomeStud = () => <h1>Student Login</h1>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to KeyScribe!</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome_teacher" element={<WelcomeTeach />} />
          <Route path="/welcome_student" element={<WelcomeStud />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
