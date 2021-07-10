import React from 'react'
import styled from 'styled-components';

const ContentFooter = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    
    @media (min-width:${({theme}) => theme.mediaQueries.large}){
        margin-top: 1.5rem;
        };
`

export default ContentFooter;
