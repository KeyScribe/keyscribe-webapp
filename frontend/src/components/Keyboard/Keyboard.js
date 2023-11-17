import React, { useState } from 'react';
import { KeyboardWrapper } from './Keyboard.styled';
import Button from '@mui/material/Button';

const sendRequest = (pin, state) => {
    fetch('/keyboard/led', {
        method: 'POST',
        //mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin: pin, state: state }),
    })
    .then((response) => {
        if (response.ok) {
            console.log(`Successfully turned on ${pin} LED.`);
        } else {
            //console.error(`Failed to turn on ${color} LED.`);
            console.log(response.body);
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
        
        <div onMouseDown={() => sendRequest("4", "0")} onMouseUp={() => sendRequest("4", "1")} class="piano-key white" id="greenButton">Green</div>
        <div class="piano-key black" id="blackButton1">Black</div>
        <div onMouseDown={() => sendRequest("27", "0")} onMouseUp={() => sendRequest("27", "1")} class="piano-key white" id="redButton">Red</div>
        <div class="piano-key black" id="blackButton2">Black</div>
        <div onMouseDown={() => sendRequest("10", "0")} onMouseUp={() => sendRequest("10", "1")} class="piano-key white" id="yellowButton">Yellow</div>
        <div class="piano-key black" id="blackButton3">Black</div>
        <div onMouseDown={() => sendRequest("9", "0")} onMouseUp={() => sendRequest("9", "1")} class="piano-key white" id="blueButton">Blue</div>
    </div>
    <Button onClick={stopRecording} variant="contained" style={{ textTransform: 'none' }} disabled={!isRecording}>Stop Recording</Button>
    </KeyboardWrapper>
 );
 };

// Keyboard.propTypes = {};

// Keyboard.defaultProps = {};

export default Keyboard;
