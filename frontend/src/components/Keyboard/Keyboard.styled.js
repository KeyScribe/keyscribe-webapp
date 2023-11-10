import styled from 'styled-components';

export const KeyboardWrapper = styled.div`body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.piano-container {
    display: flex;
    flex-direction: row;
}

.piano-key.white {
    width: 50px;
    height: 150px;
    background: white;
    margin-right: 5px;
    border: 1px solid black;
    cursor: pointer;
}

.piano-key.black {
    background: black;
    width: 40px;
    height: 100px;
}`;
