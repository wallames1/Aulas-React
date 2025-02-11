//React
import { useCallback,useEffect,useState } from 'react';
//css
import './App.css';
//components
import StartScreen from './components/StartScreen';

//data
import {wordsList} from "./data/word"
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}, 
]



function App() {
  const[gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  //letras adivinhadas
  const [guessedLetters, setGuessedLetters] = useState ([])
  //letras erradas
  const [wrongLetters, setWrongLetters] = useState ([])
  //tentativas
  const [guesses, setGuesses] = useState (3)
  //pontuação
  const [score, setScore] = useState (0)

  const [actualGuessedLetters, setActualGuessedLetters] = useState([]);

  const pickWordAndCategory = useCallback (() => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  },[words])


// starts the secret game
  const startGame = () => {
    //pick word and picl category
    const{word,category} = pickWordAndCategory()

    //create an array of letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word,category)
    console.log(wordLetters)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = (letter) =>{
  const normalizeLetter = letter.toLowerCase()

  

  //check if letter has already been utilized
  if(
  guessedLetters.includes(normalizeLetter) || 
  wrongLetters.includes(normalizeLetter))
    {
      return
    }

    //push guessed letter or remove a guess
    if(letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter,
      ])
    } else{
      setWrongLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter,
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }  
  };

  const clearLetterStates = ()=> {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if(guesses <= 0) {
      //reset all states
      clearLetterStates()
      
      setGameStage(stages[2].name);
    }
  },[guesses])

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && (<Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score}/>}

    </div>
  );
}

export default App;
