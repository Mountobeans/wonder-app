import React from 'react'
import {useState} from 'react'


let speech = new SpeechSynthesisUtterance();

const TestList = ({Words, speaker, voices, hintHelper}) => {


function repeatWord(vocWord) {
    speech.voice = voices[speaker];
    speech.text = vocWord
    window.speechSynthesis.speak(speech);
   }


function logSpan(span) {
  (span.currentTarget.classList.remove('show'))
  hintHelper();
}

  return (
    <>
    {Words.map((vocWord) => {
        const {word, def, sent, pos} = vocWord;
        return<div className = "test-list"key = {vocWord}>
            <div className = 'word-block'>
            <p className = "word-class">  Word: &nbsp;&nbsp;&nbsp;&nbsp;  <span id = {word} className = 'show wild' onClick = {logSpan}> {word}</span></p>
            <p className = "def-class">Definition: {def.split(' ').map((word, i) => <span key = {i} className = 'show wild' onClick = {logSpan}>{word}</span>)}</p>
            <p className = "sent-class"> Sentence: {sent.split(' ').map((word, i) => <span key = {i} className = 'show wild' onClick = {logSpan}>{word}</span>)}</p>
            </div>
            <div className = "big-fat-button">
            <button className = "rpt-btn" onClick = {() => repeatWord(vocWord.word)}>Repeat Word</button>
            </div>
        </div>
        
    })}
    </>
  )
}

export default TestList