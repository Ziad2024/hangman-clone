import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function IsVictory() {
    const dispatch = useDispatch()
    const hangman = useSelector((state)=>state)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (hangman.inCorrect >= 6 || rondom.size === correct.size) {
                dispatch({ type: "STATUS" });
            }
        }, 500)
        return () => {
            clearTimeout(timeout);
        }
    });
    const rondom = new Set([...hangman.correctWord]);
    const correct = new Set([...hangman.randomWord]);
  return (
    hangman.open  && (
      <div className='absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-60 '>
        <div className='bg-white p-8 rounded-lg z-60 flex flex-col justify-center items-center gap-4'>
          {
            rondom.size === correct.size ?
            <h1 className='text-center text-3xl text-black '>
            Winner 
          </h1>
          :
          <>
            <h1 className='text-center text-3xl text-black '>
            Game Over
          </h1>
          <p className='text-lg italic font-semibold'>the word is: {hangman.randomWord}</p>
          </>
          }
          
          <button 
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => {
             dispatch({type:"RESET"})
            }}
          >
            Play Again!
          </button>
        </div>
      </div>
    )
  );
}

export default IsVictory;
