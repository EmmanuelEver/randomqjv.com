import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import URLS from '../constants/urls'
import { new_verse } from '../store/actions/contentActions'
import AudioButton from './shared/AudioButton'
import ContentFooter from './shared/ContentFooter'
import ContentWrapper from './shared/ContentWrapper'
import Loader from './shared/loader'
import NewButton from './shared/NewButton'
import ShareButton from './shared/ShareButton'
import useSpeak from '../hooks/useSpeak'

const Verses = () => {  
   // const {data, error, isLoading, doFetch} = useFetch(URLS.versesUrl);
   const dispatch = useDispatch();
   const verse = useSelector(state => state.verse);
   const [isLoading, setIsLoading] = useState(false);
   const [err, setErr] = useState(null);
   const [copyText, setCopyText] = useState("");
   const verseRef = useRef(null);
   const [speak, unSubscribe] = useSpeak(`${verse?.verse?.text}... ${verse?.verse?.reference}`);

   const doFetch = () => {
       setIsLoading(true);
       fetch(URLS.versesUrl)
       .then(resp => resp.json())
       .then(data => {
           dispatch(new_verse(data.verse.details));
           setIsLoading(false);
       })
       .catch( err => {
           setErr(err);
           setIsLoading(true);
       });  
   }

   useEffect(() => {
       if(Object.keys(verse).length === 0) doFetch()

       return () => unSubscribe();
   },[])

   useEffect(() => {
       if(err) alert(err)
   },[err])

   const copyHandler = () => {
    verseRef.current.select();
    document.execCommand("Copy");
   }
//    const speak = (text) => {
//     speechSynthesis.cancel()
//         var msg = new SpeechSynthesisUtterance();
//         var voices = speechSynthesis.getVoices();
//         msg.voice = voices[10];
//         msg.voiceURI = 'native';
//         msg.volume = 1;
//         msg.rate = 1;
//         msg.pitch = 2;
//         msg.text = text;
//         msg.lang = 'en-US';

//         speechSynthesis.speak(msg);
        
//     }

    return (
        <ContentWrapper>
             {
                !isLoading?
                <>
                <QuoteText>
                      {verse?.verse?.text} 
                </QuoteText>
                <Author>
                    - {verse?.verse?.reference} -
                </Author>
                <ContentFooter>
                    <AudioButton clickHandler={speak} />
                    <NewButton clickHandler={doFetch}/>
                    <ShareButton clickHandler={copyHandler}/>
                </ContentFooter>
                <HiddenTextarea ref={verseRef} value={`${verse?.verse?.text} -${verse?.verse?.reference}-`} readOnly/>
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
export default Verses;
