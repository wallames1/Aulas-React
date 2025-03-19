import React, { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext"; // Caminho correto
import { TitleColorProvider } from "./context/TitleColorContext"; // CERTO

const Home = () => {
  const { color, dispatch } = useContext(TitleColorContext);

  const changeColor = (newColor) => {
    dispatch({ type: 'SET_COLOR', color: newColor });
  };

  return (
    <div>
      <h1 style={{ color }}>Título com cor dinâmica</h1>
      <button onClick={() => changeColor('blue')}>Mudar para azul</button>
      <button onClick={() => changeColor('green')}>Mudar para verde</button>
    </div>
  );
};

export default Home;
