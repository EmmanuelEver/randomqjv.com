import React, { useEffect, useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { new_quote } from '../store/actions/contentActions'
import URLS from '../constants/urls'
import AudioButton from './shared/AudioButton';
import ContentFooter from './shared/ContentFooter';
import ContentWrapper from './shared/ContentWrapper';
import Loader from './shared/loader';
import NewButton from './shared/NewButton';
import ShareButton from './shared/ShareButton';
import useSpeak from '../hooks/useSpeak'


const Quotes = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();
    const quote = useSelector(state => state.quote);
    const quoteRef = useRef(null)
    const [speak, unSubscribe] = useSpeak(`${quote?.quote?.text}`);

    const doFetch = () => {
        setIsLoading(true);
        fetch(URLS.quotesUrl)
        .then(resp => resp.json())
        .then(data => {
            dispatch(new_quote(data[Math.floor(Math.random() * data.length)]));
            setIsLoading(false);
        })
        .catch( err => {
            setErr(err);
            setIsLoading(true);
        });  
    }

    useEffect(() => {
        if(Object.keys(quote).length === 0) doFetch()

        return () => unSubscribe()
    },[])

    useEffect(() => {
        if(err) alert(err)
    },[err])

    const copyHandler = () => {
        console.log(quoteRef.current.value)
        quoteRef.current.select();
        document.execCommand("Copy");
       }
    
    return (
        <ContentWrapper>
            {
                !isLoading ?
                <>
                <QuoteText>
                    " {quote?.quote?.text} "
                </QuoteText>
                <Author>
                    - {quote?.quote?.author ? quote?.quote?.author : "anonymous"} -
                </Author>
                <ContentFooter>
                    <AudioButton clickHandler={speak}/>
                    <NewButton clickHandler={doFetch}/>
                    <ShareButton clickHandler={copyHandler}/>
                </ContentFooter>
                <HiddenTextarea ref={quoteRef} value={`${quote?.quote?.text} - ${quote?.quote?.author}-`} readOnly/>
                </>
                :
                <Loader />
            }
        </ContentWrapper>
    )
}

const QuoteText = styled.blockquote`
    line-height: 1.2;
    font-size: 1rem;
    text-align:center;
    color: ${({theme}) => theme.colors.neutral.white};
    text-align: center;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 1.5rem;
        };
`

const Author = styled.p`
    margin-top: 1.25rem;
    line-height: 1.2;
    font-size: .7rem;
    text-align:center;
    color: ${({theme}) => theme.colors.neutral.accent};
    text-align: center;
    font-weight: 500;

    @media (min-width:${({theme}) => theme.mediaQueries.large}){
            font-size: 1rem;
        };
`
const HiddenTextarea = styled.textarea`
    pointer-events: none;
    opacity:0;
    height: 0;
`

export default Quotes
