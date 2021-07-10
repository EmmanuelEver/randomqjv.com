import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <Spinner viewBox="0 0 50 50">
            <CirclRing cx="25" cy="25" r="22.5" />
            <CircleLine cx="25" cy="25" r="22.5" />
        </Spinner>
    )
}

const Spinner = styled.svg`
    font-size: 2.5rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 3.5rem;
        };
`

const CirclRing = styled.circle`
    fill: none;
    stroke: ${({theme}) => theme.colors.neutral.darkest};
    stroke-width: 4;
    opacity: .5;
`

const CircleLine = styled.circle`
    fill: none;
  stroke: ${({theme}) => theme.colors.neutral.accent};
  stroke-width: 4;
  opacity: .75;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  transform: rotate3d(0, 0, 1, 0deg);
  animation: 2156ms spinner-arc ease-in-out infinite,
    1829ms spinner-rotate linear infinite;
`

export default Loader
