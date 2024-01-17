import styled from 'styled-components';
import bgImg from '../../assets/background.jpg'
import user from '../../assets/user-icon.png'
import lock from '../../assets/lock-icon.png'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

export const HeaderText = styled.h1`
    font-family: 'Marck Script', sans-serif;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
`

export const Background = styled.div`
    background-image: url(${bgImg});
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(5px);
`

export const LoginForm = styled.div`
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
        background-image: url(${user});
        width: 20px;
        height: 20px;
        top: 15px;
    }

    &:nth-child(3):before {
        background-image: url(${lock});
        width: 20px;
        height: 20px;
        top: 15px;
    }
`;
export const Input = styled.input`
    font-family: inherit;
    width: 100%;
    outline: none;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    display: block;
    padding: 0.9rem 0.7rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    color: #4A4A4A;
    text-indent: 40px;
`;

export const Button = styled.button`
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
`
export const CreateAccountButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 0.9rem 2.5rem;
    text-align: center;
    background-color: transparent;
    text-decoration: underline;
    color: #2986cc;
    font-size: 14 px;
`;