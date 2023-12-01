import './App.css';
import React from 'react'
import {useState} from 'react'
import MockApp from './components/MockApp'

function App() {

const [vocabWords, setVocabWords] = useState ([
{
word: 'slither', 
pos: '(v)',
def: 'to twist and slide',
sent: 'You don’t walk! You just slither along.',
},
{
word: 'pest',
pos: '(n)',
def: 'an harmful insect',
sent: 'The Centipede was proud to be a pest.',
},
{
word: 'colossal',
pos: '(adj.)',
def: 'extremely large',
sent: 'Have you ever seen such a colossal Centipede as me?',
},
{
word: 'rascal', 
pos: '(adj.)',
def: 'a person who behaves badly, but is still likable',
sent: 'He was obviously a rascal.'
},
{
word: 'frantically',
pos: '(adv.)',
def: 'hurriedly',
sent: 'James worked away frantically on the Centipede’s boots.'
}
])


  return (
    <div className="App">
      <header className="App-header">
        <MockApp />
      </header>
    </div>
  );
}

export default App;
