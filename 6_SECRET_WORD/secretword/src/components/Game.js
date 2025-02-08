import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button ocClick={verifyLetter}>Finalizaa jogo</button>
      </div>
  )
}

export default Game