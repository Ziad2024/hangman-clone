import HangmangWord from "./HangmangWord";
import { useDispatch, useSelector } from "react-redux";

const KEYS = "abcdefghijklmnopqrstuvwxyz";

function Keyboard() {
  const RandomWord = useSelector((state) => state.randomWord);
  const disabledKeys = useSelector((state) => state.disabledKeys);


  const dispatch = useDispatch();

  const handleClick = (key, _) => {
    dispatch({ type: "SET_DISABLED", payload:key  });
    
    if (RandomWord.includes(key)) 
    {
      const char = RandomWord.indexOf(key);
      dispatch({ type: "SET_CORRECT", payload: RandomWord[char] });
    } 
    else
     {
      dispatch({ type: "SET_INCORRECT" });
    }
  };

  return (
    <div className="absolute bottom-10">
      <HangmangWord />

      <div className="max-w-[400px] flex justify-center flex-wrap gap-5 text-white">
        {KEYS.split("").map((key, index) => (
          <button
            key={index}
            className={`capitalize bg-sky-600 p-2 rounded ${
              disabledKeys[key] ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handleClick(key, index)}
            disabled={disabledKeys[key]}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
