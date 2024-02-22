import styled from 'styled-components';

export const SettingsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #e4f0ef;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ListWrapper = styled.div`
    border-radius: 25px;
    background: #B8DBD9;
    width: 18%;
    height: 50%;
    margin-left: 1%;
    margin-right: 1%;
    padding: 1%;
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    margin: 0px;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 45%;
    width: 45%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #e4f0ef;
    display: block;
    padding: 0.5%;
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    justify-content: center;
`;

export const Input = styled.input`
    border: none;
    margin: auto;
    margin-bottom: 2%;
    display: block;
    font-family: inherit;
    width: 80%;
    border-radius: 4px;
    padding: 0.9rem 0.7rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    color: #4A4A4A;
`;

export const CardButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
    padding: 1%;
`;