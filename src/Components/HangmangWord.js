import { useSelector } from 'react-redux';

function HangmangWord() {

    const Correct=useSelector((state)=> state.correctWord)
    const RandomWord=useSelector((state)=> state.randomWord)
   return (
    <div>
        <ul className='flex gap-1 justify-center items-center mb-4'>
            {RandomWord?.split("").map((letter, index) => (
                <li key={index} className='text-4xl font-bold'>{Correct.includes(letter) ? letter: "_"}</li>
            ))}
        </ul>
    </div>
  );
}

export default HangmangWord;
