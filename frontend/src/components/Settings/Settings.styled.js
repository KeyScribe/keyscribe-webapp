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
    border: 1px solid black; // temp
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: white;
`;