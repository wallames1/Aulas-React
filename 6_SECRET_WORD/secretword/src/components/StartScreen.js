import { useState } from "react"
import "./StartScreen.css"

const StartScreen = () => {
  
  const natan = "NATHAN VIADO"
  
  // Estado para controlar a visibilidade do conteúdo
  const [showContent, setShowContent] = useState(false)

  // Função que altera o estado para mostrar o conteúdo
  const handleStartClick = () => {
    setShowContent(true)
  }
  return (
    <div className="start">
      <h1>Secret Word</h1> 
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={handleStartClick}>Começar a jogar</button>
      {showContent && <p>{natan}</p>}
    </div>
  )
}

export default StartScreen