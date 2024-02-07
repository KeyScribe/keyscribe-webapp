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
