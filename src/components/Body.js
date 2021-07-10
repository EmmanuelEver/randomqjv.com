import React from 'react'
import styled from 'styled-components';
import Content from './Content';
import MenuNav from './MenuNav';

const Body = () => {
    return (
        <Wrapper>
            <MenuNav/>
            <Content/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 36px;
    position: relative;
    z-index: 5;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            padding: 0px 50px;
        }
`
export default Body;
