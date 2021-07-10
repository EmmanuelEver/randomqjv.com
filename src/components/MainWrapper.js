import React from 'react';
import styled, { keyframes } from 'styled-components';
import bg from '../assets/images/bg-stars.svg';
import hillBg from '../assets/images/pattern-hills.svg';

const MainWrapper = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const rotate = keyframes`
    0%{
        transform: rotate(0) scale(1) translateX(0);
    }
    50%{
        transform: rotate(180) scale(3) translateX(-20%);
    }
    100%{
        transform: rotate(360deg) scale(1) translateX(-40%);
    }
`

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    min-height: 100vh;
    background: ${({theme}) => theme.colors.neutral.light};
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${bg});
        background-size: cover;
        background-position: center center;
        animation-name: ${rotate};
        animation-duration: 120s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background-attachment: fixed;
    }
    
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        pointer-events: none;
        background: url(${hillBg});
        background-size: cover;
        background-position: bottom left;
        background-attachment: scroll;
        z-index: 0;

        @media (min-width:${({theme}) => theme.mediaQueries.large}){
            background-position: bottom center;
            height: 30%;
        }
    }
`


export default MainWrapper;
