import React, { useState } from 'react';
import { KeyboardWrapper } from './Keyboard.styled';
import Button from '@mui/material/Button';

const sendRequest = (color) => {
    fetch('/keyboard/led', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ color: color }),
    })
    .then((response) => {
        if (response.ok) {
            console.log(`Successfully turned on ${color} LED.`);
        } else {
            console.error(`Failed to turn on ${color} LED.`);
        }
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });
}

const Keyboard = () => {

 const [isRecording, setRecording] = useState(false);

 const startRecording = () => {
    setRecording(true);
    console.log("Recording...");
 }

 const stopRecording = () => {
    setRecording(false);
    console.log("Recording...");
 }

 return (
    <KeyboardWrapper data-testid="Keyboard" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button onClick={startRecording} variant="contained" style={{ textTransform: 'none' }} disabled={isRecording}>Start Recording</Button>
    <div class="piano-container">
        
        <div onClick={() => sendRequest('green')} class="piano-key white" id="greenButton">Green</div>
        <div class="piano-key black" id="blackButton1">Black</div>
        <div onClick={() => sendRequest('red')} class="piano-key white" id="redButton">Red</div>
        <div class="piano-key black" id="blackButton2">Black</div>
        <div onClick={() => sendRequest('yellow')} class="piano-key white" id="yellowButton">Yellow</div>
        <div class="piano-key black" id="blackButton3">Black</div>
        <div onClick={() => sendRequest('blue')} class="piano-key white" id="blueButton">Blue</div>
    </div>
    <Button onClick={stopRecording} variant="contained" style={{ textTransform: 'none' }} disabled={!isRecording}>Stop Recording</Button>
    </KeyboardWrapper>
 );
 };

// Keyboard.propTypes = {};

// Keyboard.defaultProps = {};

export default Keyboard;
