import styled from 'styled-components';
import Container from '@mui/material/Container'

export const SettingsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserInfoWrapper = styled(Container)`
    border: 1px solid black; // temp
`;

export const FriendsListWrapper = styled(Container)`
    border: 1px solid black; // temp
`;

export const BoardsListWrapper = styled(Container)`
    border: 1px solid black; // temp
`;

export const CardWrapper = styled(Container)`
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

export const BackWelcomeButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 auto;
    padding: 0.9rem 2.5rem;
    text-align: center;
    background-color: #47AB11;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    position: absolute;
    top: 10px;
    right: 15px;
`;