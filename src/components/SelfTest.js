import {useState} from 'react';
import {Words} from '../data.js'
import TestList from './TestList'
import {useEffect} from 'react'



let speech = new SpeechSynthesisUtterance();


const SelfTest = ({targetValue}) => {
    
    const [calledWords, setCalledWords] = useState([]);
    const [slicer, setSlicer] = useState(0);
    const [uncalledWords, setUncalledWords] = 
      useState(Words)
        // .sort(() => (Math.random() > .5) ? 1 : -1))
    const [keyWord, setKeyWord] = useState('')
    const [hints, setHints] = useState(0)
    const [voices, setVoices] = useState(window.speechSynthesis.getVoices());
    const [speaker, setSpeaker] = useState([]);


     useEffect(() => {
      let preVoices = (window.speechSynthesis.getVoices());
     setVoices(preVoices)
     setKeyWord(Words[slicer])
     setSlicer(prev => prev+1)
     console.log("selftest useEffect")
    },
    [])

  // function logEverything() {
  //   console.log(Words)
  //   console.log(keyWord)
  //   console.log(slicer)
  //   console.log(Words.length)
  // }

function continueGame(){
  setCalledWords(Words.slice(0, slicer))
  setKeyWord(Words[slicer])
  setSlicer(prev => prev+1)
  shiftWord()
    }

function oldFunction () {
  // setCalledWords (prev => [...prev, Words.filter((keyword) => Words.word !== keyword)])
  for (let word in Words) {
    console.log ([Words[word]])
  }}

    function hintHelper() {
      setHints (prev => prev+1)
    }

  function shiftWord() {
    if ((slicer - 1) < Words.length) {
    speech.text = keyWord.word
    speech.voice = voices[speaker];
    window.speechSynthesis.speak(speech);
    } else {
    speech.text = "Those were all the words"
    window.speechSynthesis.speak(speech);
   }}

 
  // {window.speechSynthesis.onvoiceschanged = () => {
  // speech.voice = voices[0];
 
  return (
    <div>
     {targetValue ==='Self' && (
      <div>
       <select className = "choose-voice" style = {{marginTop: "40px"}}
       onChange = {(e) => setSpeaker (e.target.value)}>
        <option style = {{textAlign: "center"}}>Choose Your Admin!</option>
      {voices.map((item, i) => {
          return (<option key = {item.name} value = {i}>{item.voiceURI}</option>)
      })}
       </select>
    
    <div className = "self-test-body">
    <button className = "hit-me-button" onClick = {continueGame}><h3>Hit Me!</h3></button>
    <h2>Hints Used: {hints}</h2>
    {/* <button onClick = {displayDef}><h2>display arrays</h2></button> */}
    </div>

    <div className = "test-sheet"><div >
          <TestList voices = {voices} speaker = {speaker} hintHelper = {hintHelper} Words = {calledWords}/>
      </div>
   </div>
   </div>
     )}
    </div>
  )
}

export default SelfTest

