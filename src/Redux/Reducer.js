import words from "../Components/wordList.json";
const initialState = {
  randomWord: words[Math.floor(Math.random() * words.length)],
  correctWord: "",
  inCorrect: 0,
  disabledKeys:{},
  open:false
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DISABLED":
      return {
        ...state,
        disabledKeys: {...state.disabledKeys,[action.payload]:true}
      };
    case "SET_CORRECT":
      return {
        ...state,
        correctWord: [...state.correctWord,action.payload].join(""),
      };
    case "SET_INCORRECT":
      return {
        ...state,
        inCorrect: state.inCorrect + 1,
      };
    case "STATUS":
      return {
        ...state,
        open: true,
      };
    case "RESET":
      return {
        randomWord: words[Math.floor(Math.random() * words.length)],
        correctWord: "",
        inCorrect: 0,
        disabledKeys:{},
        open:false,
      };

    default:
      return state;
  }
};
