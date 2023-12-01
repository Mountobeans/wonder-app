import React from 'react'
import {useState, useEffect} from 'react'

// const keyboard = [];
// {for (let i = 97; i<=122; i++) {
//     keyboard.push(String.fromCharCode(i))
// }}


 


const Keyboard = ({clickFunction, keyboard, lost}) => {

 
  return (
    <div className ="keyboard">
                {keyboard.map((key) => (
                    <button key = {key.id} onClick = {(e) => clickFunction(e)} className = 'keyboard-button'>{key}</button> 
                ))}
            </div>
           
  )
}

export default Keyboard