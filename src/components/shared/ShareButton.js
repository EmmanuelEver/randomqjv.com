import React from 'react'
import styled from 'styled-components'

const ShareButton = ({clickHandler}) => {
    return (
        <Wrapper onClick={clickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/></svg>
        </Wrapper>
    )
}

const Wrapper = styled.button`
    border: none;
    background: transparent;
    outline: none;
    fill: ${({theme}) => theme.colors.primary.blue};
    margin: 0 0 0 .5rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: all .3s ease-in-out;

    &:hover{
        fill: ${({theme}) => theme.colors.neutral.accent};
    }
`

export default ShareButton
