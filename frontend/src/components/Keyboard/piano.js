import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const sendRequest = (note, state) => {
    fetch(`${apiURL}/led`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note, state }),
    })
    .then((response) => {
        if (response.ok) {
            console.log(`Successfully turned on ${note} LED.`);
        } else {
            throw Error(response.statusText);
        }   
    })
    .catch((error) => {
        console.error(`${error}`);
    });
}

const handleMouseDown = (midiNumber) => {
    sendRequest(midiNumber.toString(), '0');
}

const handleMouseUp = (midiNumber) => {
    sendRequest(midiNumber.toString(), '1');
}

const PianoKeyboard = () => {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f3');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    return (
        <center>
            <Piano
                noteRange={{ first: firstNote, last: lastNote }}
                playNote={(midiNumber) => handleMouseDown(midiNumber)}
                stopNote={(midiNumber) => handleMouseUp(midiNumber)}
                width={1000}
                keyboardShortcuts={keyboardShortcuts}
            />
        </center>
    );
}

export default PianoKeyboard;
