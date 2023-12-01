import React from 'react'
import WordScramble from './WordScramble'
import Hangman from './Hangman'
import SelfTest from './SelfTest'

const GameChoices = ({targetValue}) => {
  return (
    <div>
    <WordScramble id = "Scram" targetValue = {targetValue} className = "word-scramble-class"/>
    <Hangman id = 'Hang' targetValue = {targetValue} className = "hangman-class" />
    <SelfTest id = 'Self' targetValue = {targetValue}/>
    </div>
  )
}

export default GameChoices