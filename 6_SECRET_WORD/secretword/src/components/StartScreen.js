import { useState } from "react"
import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Secret Word</h1> 
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar a jogar</button>
    </div>
  )
}

export default StartScreen