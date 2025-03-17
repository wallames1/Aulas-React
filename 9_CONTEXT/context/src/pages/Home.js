// pages/Home.js
import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";  // Corrigido o caminho
import ChangeCounter from "../components/ChangeCounter";  // Correto

const Home = () => {
  const { counter } = useContext(CounterContext);  // Acesso ao valor do contador

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />  {/* Componente que altera o valor */}
    </div>
  );
};

export default Home;
