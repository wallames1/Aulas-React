// pages/Home.js
import React from "react";
import ChangeCounter from "../components/ChangeCounter";

// Importando os hooks
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext"; 

const Home = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  console.log("Counter:", counter);  // Logando o contador
  console.log("Title Color:", color);  // Logando a cor do título

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};


export default Home;
