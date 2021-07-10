import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { select_choice } from '../store/actions/activeChoiceActions';

const indicatorMove = {
    quotes:"0%",
    jokes:"100%",
    verses:"200%"
}

const MenuNav = () => {
    const dispatch = useDispatch()
    const {choice} = useSelector(state => state.choice);

    const choiceHandler = choice => {
        dispatch(select_choice(choice))
    }

    return (
        <Wrapper>
            <ToggleButtonWrapper>
                <ToggleButton active={choice === "quotes"}  onClick={() => choiceHandler("quotes")}>
                    Quotes
                </ToggleButton>
                <ToggleButton active={choice === "jokes"} onClick={() => choiceHandler("jokes")}>
                    Jokes
                </ToggleButton>
                <ToggleButton active={choice === "verses"} onClick={() => choiceHandler("verses")}>
                    Verses
                </ToggleButton>
                <ActiveIndicator toMove={indicatorMove[choice]}/>
            </ToggleButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
`

const ToggleButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    border-radius: 50px;
    background: ${({theme}) => theme.colors.neutral.dark};
    position: relative;
    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            height: 60px;
        }
`

const ToggleButton = styled.button`
    flex-basis: 33.33%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: .8rem;
    font-weight: 700;
    padding: 0 1rem;
    cursor: pointer;
    color: ${({theme, active}) => active?theme.colors.neutral.darkest: theme.colors.primary.blue};
    transition: all .15s ease-in-out;
    z-index: 5;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 1.1rem;
        }
`

const ActiveIndicator = styled.div`
    position: absolute;
    top: 50%;
    left: .5%;
    height: 80%;
    width: 33%;
    background: #00cec9;
    border-radius: 50px;
    box-shadow: 0px 0px 4px 3px #191A24;
    transform: translateY(-50%) translateX(${({toMove}) => toMove || "0"});
    transition: all .3s ease-in-out;
`

export default MenuNav
