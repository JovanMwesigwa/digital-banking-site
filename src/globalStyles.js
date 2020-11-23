import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;

    /* @media screen and (max-width: 960px){
        padding-left: 30px;  
        padding-right: 30px;
        z-index: 999;
    } */
`;


const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease-in-out;
        background: #fff;
        background: ${({ primary }) => (primary ?  '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export default GlobalStyles; 
