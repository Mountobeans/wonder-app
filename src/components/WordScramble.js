import React, { useState, useEffect } from "react";
import GameChoices from './GameChoices'
import "./word-scramble.sass";
import {Words} from '../data.js'



//toggleScram is used for display in return

const WordScramble = ({targetValue}) => {

	// const WORDS = new Set(vocabWords.map(item => item.word));

	const WORDS = Words.map((item, index, data) => item.word)
	

	const [isPlayOn, setIsPlayOn] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [correctWord, setCorrectWord] = useState("");
	const [scrambledWord, setScrambledWord] = useState("");
    
	const [message, setMessage] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value.toUpperCase());
	};

	const selectWord = () => {
		const randomIndex = Math.floor(Math.random() * WORDS.length);
		let tempWord = WORDS[randomIndex];
		console.log(tempWord)
		console.log(WORDS)
		return tempWord;
	};

	const handleButtonClick = () => {
		if (inputValue !== "") {
			if (correctWord === inputValue) {
				setMessage("Correct Answer");
			} else {
				setMessage("Wrong Answer");
			}
		}
	};

	const handleStartGame = () => {
		setIsPlayOn(true);
		setInputValue("");
		setMessage("");
		let word = selectWord()
		.toUpperCase();
		setCorrectWord(word);
		setScrambledWord(constructScrambledWord(word));

		//-------extra delete class------------setScrambledWord(constructScrambledWordModernJS(word));----------------//
	// };
	}
	const constructScrambledWord = (word) => {
		const shuffledArray = word.split("");
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray.join("");
	};


	useEffect(() => {
		let clearMessage;
		if (message === "Wrong Answer") {
			clearMessage = setTimeout(() => setMessage(""), 800);
		}

		return () => {
			if (clearMessage) {
				clearTimeout(clearMessage);
			}
		};
	}, [message]);

	return (
        <div>
        {targetValue ==='Scram' && (
		<div className='word_scramble fade-in' >
			{!!message && (
				<div className='message'>
					<p> {message}</p>
				</div>
			)}

			<h1>Word Scramble</h1>
			<div className='content'>
				{isPlayOn ? (
					<>
						<div className='board' >
							{correctWord.split("").map((el, i) => (
								<span key={`${el}_${i}`} className='square_bg'>
									{inputValue[i]}
								</span>
							))}
						</div>
						<p className='scrambled_word'>{scrambledWord}</p>
						<div className='field'>
							<input
								type='text'
								onChange={handleInputChange}
								value={inputValue}
							/>
							<button type='button' onClick={handleButtonClick}>
								Enter
							</button>
						</div>
					</>
				) : (
					<button
						className='start_game'
						type='button'
						onClick={handleStartGame}
					>
						Start Game
					</button>
				)}

				{isPlayOn && (
					<button
						className='start_game new'
						type='button'
						onClick={handleStartGame}
					>
						New Game
					</button>
				)}
			</div>
		</div>
        )}
        </div>
    
    );
};

export default WordScramble;