import './MockApp.css'
import React from 'react'
import {useState} from 'react'
import GameButton from './GameButton'
import GameChoices from './GameChoices'
import SelfTest from './SelfTest'


const MockApp = ({onConsoleLog}) => {
    const [usedWords, setUsedWords] = useState([]);
    const [targetValue, setTargetValue] = useState("")
    const [gameButtons, setGameButtons] = useState(

    [{
      id: 1, 
      game: "Word Scramble",
      gameKey: "Scram",
      choice: '',
      fade: '',
    },
    {
      id:2,
      game: "Hangman",
      gameKey: "Hang",
      choice: '',
      fade:'',
    },
    {
      id:3,
      game: "Self Test",
      gameKey: "Self",
      choice: '',
      fade:'',
    }
  ])
  


    const onChoice = (id) => {
      
      // setTimeout(() => , '1000')
      // setTimeout(() => , '2000')
      {setTargetValue(gameButtons.find(x => x.id === id).gameKey);}   // sets target value for game display,
      {setGameButtons(gameButtons.map((prev) =>
        (prev.id == id ? {... gameButtons, choice: 'grow'} : {...gameButtons, choice: 'shrink'})
      ))}}

      // {(gameButtons.find(x => x.id === id).fade = 'fade-in');}
    //  const newButtonArray = gameButtons.map(button => {
    //   if (button.id !== id) {
    //     return {
    //         ...button,
    //         choice: false };
    //   } else {
    //     return {
    //       ...button,
    //       choice: true,                                                
    //     };
    //   }
    // });
    // setGameButtons(newButtonArray);
    // setGameButtons(gameButtons.filter((button) => button.id == id));   //deletes the button not clicked
  


//    const addGrowClass = (id) => {

  return (


   <>
    <div className = "main"/>
      <GameButton onChoice={onChoice} gameButtons = {gameButtons}/>
      <div className = "game-board">
      <GameChoices targetValue = {targetValue} gameButtons = {gameButtons}/>
    </div>
    </>
  )
  }
export default MockApp


//{vocabWords.map((item) => (<h3>{item.word}</h3>))}

// const handleClick = event => {
//     👇️ toggle class on click
//     event.currentTarget.classList.toggle('bg-salmon');

    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  // };

      // setTimeout(() => {setToggleGame(prevVal => !prevVal);}, '3000');
  
    // function generateVocabWord() {
    //     let i = Math.floor(Math.random() * vocabWords.length)
    //     console.log (vocabWords.word[i])
    // }
    // function generateVocabWord2() {
    // let i = (Math.floor(Math.random() * vocabWords.length))
    // console.log(vocabWords[i].word)  
    // }

    //<GameButton gamebuttonid = '2' title = 'Hangman' onValueChange = {onValueChange} logFunction = {(e) => logFunction(e)}/>
    
    // setWORDS(vocabWords.map((item) => (item.word)))
    // setWORDS([...vocabWords]) 
