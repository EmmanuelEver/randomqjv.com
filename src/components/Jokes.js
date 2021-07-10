import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import URLS from '../constants/urls'
import { new_joke } from '../store/actions/contentActions'
import AudioButton from './shared/AudioButton'
import ContentFooter from './shared/ContentFooter'
import ContentWrapper from './shared/ContentWrapper'
import Loader from './shared/loader'
import NewButton from './shared/NewButton'
import ShareButton from './shared/ShareButton'
import useSpeak from '../hooks/useSpeak'


const Jokes = () => {
    //const {data,error, isLoading, doFetch} = useFetch(URLS.jokesUrl);
    const dispatch = useDispatch();
    const joke = useSelector(state => state.joke);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const jokeRef = useRef(null)
    const [speak, unSubscribe] = useSpeak(`${joke.setup} ${joke.punchline}`);



    const doFetch = () => {
        setIsLoading(true);
        fetch(URLS.jokesUrl)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch(new_joke(data));
            setIsLoading(false);
        })
        .catch( err => {
            setErr(err);
            setIsLoading(true);
        });  
    }

    useEffect(() => {
        if(Object.keys(joke).length === 0) doFetch()

        return () => unSubscribe()
    },[])

    useEffect(() => {
        if(err) alert(err)
    },[err])

    const copyHandler = () => {
        jokeRef.current.select();
        document.execCommand("Copy");
       }

    return (
        <ContentWrapper>
            {
                !isLoading?
                <>
                <SetupText>
                    {joke.setup}
                </SetupText>
                <QuoteText>
                    " {joke.punchline} "
                </QuoteText>
                <ContentFooter>
                    <AudioButton clickHandler={speak}/>
                    <NewButton clickHandler={doFetch}/>
                    <ShareButton clickHandler={copyHandler}/>
                </ContentFooter>
                <HiddenTextarea ref={jokeRef} value={`${joke.setup} -${joke.punchline}-`} readOnly/>
                </>
                :
                <Loader />
            }
        </ContentWrapper>
    )
}
const SetupText = styled.blockquote`
    line-height: 1.2;
    font-size: .75rem;
    text-align:center;
    color: ${({theme}) => theme.colors.neutral.white};
    text-align: center;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 1rem;
        };
`
const QuoteText = styled.blockquote`
    margin-top: .5rem;
    line-height: 1.2;
    font-size: 1rem;
    text-align:center;
    color: ${({theme}) => theme.colors.neutral.accent};
    text-align: center;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 1.5rem;
            margin-top: 1rem;
        };
`
const HiddenTextarea = styled.textarea`
    pointer-events: none;
    opacity:0;
    height: 0;
`

export default Jokes
