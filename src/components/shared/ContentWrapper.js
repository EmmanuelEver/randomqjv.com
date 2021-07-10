import React from 'react'
import styled from 'styled-components'

const ContentWrapper = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem .5rem;
    height: 100%;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            padding: 2rem 1.5rem .5rem;
        };
`

export default ContentWrapper
