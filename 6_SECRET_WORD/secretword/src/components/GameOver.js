import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
    <h1>Game Over</h1>
    <button ocClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver