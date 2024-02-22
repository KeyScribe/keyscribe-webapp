import styled from 'styled-components';

export const NavBar = styled.div`
    width: 100%;
    height: 10%;
    background: #5F758E;
    position: absolute;
    top: 0px;
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
    
    &:not(:disabled):hover {
        background-color: ${({hbg}) => hbg};
        scale: 101%;
    }
`;