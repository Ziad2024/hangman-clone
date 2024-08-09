import Hangman from "./Components/Hangman";
import Keyboard from "./Components/Keyboard";
import IsVictory from "./Components/IsVictory";


function App() {

  return (
    <div className="bg-sky-950 w-screen h-screen flex justify-center items-center p-3">
      <p className="absolute top-16 text-4xl text-white font-bold">Hangman Game</p>
      <div className=' bg-white w-[900px] h-[600px] rounded-lg relative flex flex-col justify-center items-center'>
        <Hangman /> 
        <Keyboard />
      </div>
        <IsVictory />
    </div>
  );
}

export default App;
