import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Jokes from './Jokes';
import Quotes from './Quotes';
import Verses from './Verses';

const Content = () => {
    const {choice} = useSelector(state => state.choice);
    return (
        <Wrapper>
            <Container>
                <Overlay />
                { choice === "quotes" && <Quotes /> }
                { choice === "jokes" && <Jokes /> }
                { choice === "verses" && <Verses /> }
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 1.5rem auto 0;
`

const Container = styled.div`
    width: 100%;
    min-height: 150px;
    position: relative;
    border-radius: .5rem;
    padding: 1rem .75rem;
    background: ${({theme}) => theme.colors.neutral.dark};
    box-shadow: 0px 7px 12px 2px #191A24;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            min-height: 200px;
        };
    
`
const Overlay = styled.div`
    
`
export default Content;
