import React from 'react'
import hangman6 from '../images/hangman-6.svg'
import hangman5 from '../images/hangman-5.svg'
import hangman4 from '../images/hangman-4.svg'
import hangman3 from '../images/hangman-3.svg'
import hangman2 from '../images/hangman-2.svg'
import hangman1 from '../images/hangman-1.svg'
import hangman0 from '../images/hangman-0.svg'

import { useSelector } from 'react-redux'

function Hangman() {
    const hangmanImages=[hangman0,hangman1,hangman2,hangman3,hangman4,hangman5,hangman6];
    const InCorrect=useSelector((state)=> state.inCorrect)
  return (
    <div>
    <div className=' absolute top-10 left-5  '>
        <img src={hangmanImages[InCorrect]}/>
    </div>
    </div>
  )
}

export default Hangman
