import React from 'react'
import {useState} from 'react'
import "./Hangman.css";
import logo from '../images/hangman-0.svg'
import {Words} from '../data.js'
import {useEffect} from 'react'
import Keyboard from './Keyboard'

    //    [...splitCurrentWord].forEach((letter, index) => {
    //         if (letter === letterClicked) {
    //             tempArray.push(letter) }
    //             console.log(tempArray)
    //     })

const Hangman = ({targetValue}) => {

    const [wordDisplay, setWordDisplay] = useState([])
    const [currentWord, setCurrentWord] = useState('')
    const [currentDef, setCurrentDef] = useState('')
    // const [started, setStarted] = useState(false);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [guesses, setGuesses] = useState(0);
    const [hint, setHint] = useState(false)
    const [lost, setLost] = useState(false)
    const [keyboard, setKeyboard] = useState ([])
    const [indexArray, setIndexArray] = useState([])
    const [index, setIndex] = useState(0)
    // const [keyboard, setKeyboard] = useState([])
    const WORDS = Words.map((item, index, data) => item.word)
    const DEFS = Words.map((item, index, data) => item.def)
    

    
    const indexArrayFunc = () => {
        let iArray = []
        for (let i = 0; i < WORDS.length; i++) {
            iArray.push(i)
            iArray.sort(() => (Math.random() > .5) ? 1 : -1).reverse()
        }
        setIndexArray(iArray)
    }
     
   
    // function keyboardFunction() {
    //     let newArray = []
    //     for (let i = 97; i<=122; i++) {
    //     newArray.push(String.fromCharCode(i))
    //     setStarted(false)
    //     setKeyboard(newArray)
    // }}
        //     keyboard.push(String.fromCharCode(i)) )
    
    const clickFunction = (e) => {
        let tempArray = []
        const letterClicked = e.currentTarget.innerHTML
        console.log ('you clicked', letterClicked);
        console.log(currentWord.includes(letterClicked))
        if (currentWord.includes(letterClicked)) {
        setCorrectLetters(correctLetters => [...correctLetters, letterClicked])}
        else {
        setGuesses(prev => prev+1)
        }
        // [...currentWord].forEach((letter, index) => {
        //     if(letter === letterClicked) {
            // setWordDisplay([...wordDisplay, letterClicked])
            // console.log(letter, index)}})
            console.log(e.target)
            e.target.classList.add('p-events')
        }
        
        useEffect(() => {
            setCurrentWord(WORDS[indexArray[index]])
            setCurrentDef(DEFS[indexArray[index]])
            indexArrayFunc()
            console.log (WORDS[indexArray[index]])
            console.log ("useEffect setWord Hangman")
        }, [])

        useEffect(() => {
        if (guesses === 6) {
            setLost (true)
            }
        }, [guesses] )
        // if (currentWord.includes(letterClicked)) {
        // [...currentWord].forEach((letter, index) => {
        //     if(letter === letterClicked) {
        //        wordDisplay.map(letter, index) => {
                    
        //        }
                
        //         // setWordDisplay(letter, index)
        //     }
        // });
    function consoleLogTrick() {
        // console.log(keyboard)
        console.log(currentDef)
        // console.log(correctLetters)
        console.log(currentWord)
        console.log(WORDS)
        console.log(DEFS)
    }
  
    // useEffect(() => {
    //     setWordDisplay(currentWord.split('').map(() => ` ___ `))
    //     console.log ("hangman useEffect")
    // },
    // [currentWord])
        
    function continueGame() {
        setLost(false)
        getRandomWord()
        setHint(false)
        setKeyboard(prev => {
            return {prev}
        })
    }

    function filterWords(value, index) {
        return value, index == 2
    }
       
    let newArray = []
    const getRandomWord = () => {
        // let rand = Math.floor(Math.random() * WORDS.length)
        setCurrentWord(WORDS[indexArray[index]])
        setCurrentDef(DEFS[indexArray[index]])
        setLost(false)
        setHint(false)
        setIndex(prev => prev+1)
        setCorrectLetters([])
        setGuesses(0)
            for (let i = 97; i<=122; i++) {
            newArray.push(String.fromCharCode(i))
        setKeyboard(newArray)}
            let content = (document.getElementsByClassName('keyboard-button'))
            for(var i = 0; i < content.length; i++) {
                content[i].classList.remove('p-events');
              }

    }
    // wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    return (
    //    console.log(WORDS)
    
    <div>
    {targetValue=='Hang' && (
    <div className = 'fade-in hangman' style= {{backgroundColor: "yellow"}}>
    <div className = {`game-modal ${lost? 'show' : '' }`}>
        <div className ="content">
            {/* <img src="images/lost.gif" alt="gif"> */}
            <h4>Game Over!</h4>
            <p>The correct word was: <b>spaghetti</b></p>
            <button onClick={getRandomWord} className ="play-again">Continue</button>
        </div>
    </div>
    <div className ="container">
        <div className ="hangman-box">
            <img src = {logo}  alt="logo" ></img>
            <h1>Hangman Game</h1>
        </div>
        <div className ="game-box">
            <ul className ="word-display"></ul>
            <h4>
                <button onClick = {() => setHint(true)}  className = "hint-button">Hint: </button>
                <span>{hint && `${currentDef}`}</span>
                <div className = "word">
                    {currentWord.split('').map((letter, i) =>{
                    return (
                        <span className = 'letter' key = {i}>
                            {correctLetters.includes(letter) ? letter : ''}
                        </span>
                    )
                })}</div>
            </h4>
            <h4 className ="guesses-text">
                Incorrect guesses: {guesses}/6
                <b></b>
            </h4>
            <Keyboard lost = {lost} clickFunction = {clickFunction} keyboard = {keyboard}/>
            <button onClick = {getRandomWord} className = 'start-button'>START GAME</button>
            <button onClick = {consoleLogTrick} className = 'start-button'>console log</button>
        </div>
    </div>
    </div>
    )}
    </div>
    )
}

export default Hangman