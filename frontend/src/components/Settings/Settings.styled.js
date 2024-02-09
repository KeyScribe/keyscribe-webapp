import styled from 'styled-components';
import Container from '@mui/material/Container'

export const SettingsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavBar = styled.div`
    width: 100%;
    height: 10%;
    background: #5F758E;
    position: absolute;
    top: 1px;
    z-index: -1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    padding: 0.9rem 2.5rem;
    text-align: center;
    background-color: ${({bg}) => bg};
    color: ${({txt}) => txt};
    border-radius: 25px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    margin-right: 1%;
    margin-top: ${({top}) => top};
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

export const CardWrapper = styled.div`
    border: 1px solid blue; // temp
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: white;
    display: flex;
    padding: 1ex;
`;

export const FormWrapper = styled(Container)`
    border: 1px solid red; // temp    
    padding: 5ex;
`;

export const InputWrapper = styled(Container)`
    border: 1px solid black; // temp
    padding: 3ex;
`;