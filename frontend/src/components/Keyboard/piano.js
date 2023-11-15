import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

const sendRequest = (note) => {
    fetch('https://localhost:8000/led', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note: note }),
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
const PianoKeyboard = () => {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f3');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        // Play a given note - see notes below
        sendRequest(midiNumber.toString());
      }}
      stopNote={(midiNumber) => {
        // Stop playing a given note - see notes below
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
    );
}

export default PianoKeyboard;