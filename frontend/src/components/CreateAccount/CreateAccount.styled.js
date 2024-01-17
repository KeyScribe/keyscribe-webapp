import styled from 'styled-components';

export const CreateAccountWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

export const CreateAccountForm = styled.div`
    width: 350px;
    position: relative;
`;

export const FormField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;

    &:before {
        font-size: 20px;
        position: absolute;
        left: 15px;
        top: 17px;
        color: #888888;
        content: " ";
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
    }

    &:nth-child(2):before {
        width: 20px;
        height: 20px;
        top: 15px;
    }

    &:nth-child(3):before {
        width: 20px;
        height: 20px;
        top: 15px;
    }
`;