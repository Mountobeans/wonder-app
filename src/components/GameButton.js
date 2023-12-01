import React from 'react'
import {useState} from 'react'

//onClick has to be passed to MockApp


const GameButton = ({gameButtons, onChoice}) => {

   
// // const toggleGameChoices = () => (toggleValue = !toggleValue)

  return (
    <>

    {gameButtons.map((button) => (
    
    <div key = {button.id} className = {`box ${button.choice}`}  onClick = {() => {onChoice (button.id)}}> {button.game}</div> 
    ))}

    </>
  )
    }
export default GameButton