import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <HeaderText>
                    Your random quote from the universe
                </HeaderText>
                <SubHeaderText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SubHeaderText>
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 28px;
    position: relative;
    z-index: 5;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            padding: 50px 50px;
        }
`
const TextWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`
const HeaderText = styled.h1`
    font-size: 1.25rem;
    text-align: center;
    color: ${({theme}) => theme.colors.neutral.white};

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 2rem;
        }
`
const SubHeaderText = styled.p`
    font-size: .8rem;
    line-height: 1.2;
    text-align: center;
    color: ${({theme}) => theme.colors.primary.blue};
    margin-top: .5rem;
    padding: 0 1rem;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 1rem;
            padding: 0 2rem;
        }
`

export default Header
