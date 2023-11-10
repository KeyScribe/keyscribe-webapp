import React from 'react';
import { KeyboardWrapper } from './Keyboard.styled';

const sendRequest = (color) => {
   fetch('/led', {
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

const Keyboard = () => (
 <KeyboardWrapper data-testid="Keyboard">
   <div class="piano-container">
      <div onClick={sendRequest('green')} class="piano-key white" id="greenButton">Green</div>
      <div class="piano-key black" id="blackButton1">Black</div>
      <div onClick={sendRequest('red')} class="piano-key white" id="redButton">Red</div>
      <div class="piano-key black" id="blackButton2">Black</div>
      <div onClick={sendRequest('yellow')} class="piano-key white" id="yellowButton">Yellow</div>
      <div class="piano-key black" id="blackButton3">Black</div>
      <div onClick={sendRequest('blue')} class="piano-key white" id="blueButton">Blue</div>
   </div>
 </KeyboardWrapper>
);

Keyboard.propTypes = {};

Keyboard.defaultProps = {};

export default Keyboard;
