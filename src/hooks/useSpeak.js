import { useRef } from "react";

const useSpeak = (text) => {
    const synthRef = useRef(window.speechSynthesis);

    const speak = () => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = .8;
        utter.voice = synthRef.current.getVoices()[3];
        synthRef.current.speak(utter);
    }
    const unSubscribe = () => {
        synthRef.current.cancel();
    }
    
    return [speak, unSubscribe]
}

export default useSpeak;