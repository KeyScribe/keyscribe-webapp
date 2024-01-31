import styled from 'styled-components';
import bgImg from '../../assets/background.jpg'

export const WelcomeWrapper = styled.div`
`;

export const TopContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

export const CenterContainer = styled.div`
    display: inline-block;
    background: rgba(189, 189, 183, 0.5);
    backdrop-filter: blur(5px);
    width: 70%;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    top: 100px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`

const Button = styled.button`
    outline: none;
    border: solid;
    border-color: #47AB11;
    cursor: pointer;
    display: inline-block;
    margin: 0 auto;
    padding: 0.9rem 2.5rem;
    text-align: center;
    background-color: transparent;
    color: white;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    font-weight: bold;
    &:hover {
        background-color: #47Ab11;
    }
`

export const LogOutButton = styled(Button)`
    position: absolute;
    top: 0 px;
    left: 20px
`

export const SettingsButton = styled(Button)`
    position: absolute;
    top: 0 px;
    right: 20px;
`

export const JoinSessionButton = styled(Button)`
    position: relative;
    top: 120px;
    width: 75%;
`

export const CreateSessionButton = styled(JoinSessionButton)`
    position: relative;
    top: 200px;
    width: 75%;
`

export const Background = styled.div`
    background-image: url(${bgImg});
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
`