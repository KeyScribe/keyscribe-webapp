import styled from 'styled-components';
import Container from '@mui/material/Container'

export const SettingsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserInfoWrapper = styled(Container)`
    justify-content: left;
`;

export const FriendsListWrapper = styled(Container)`
    justify-content: right;
`;

export const BoardsListWrapper = styled(Container)`
    justify-content: left;
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