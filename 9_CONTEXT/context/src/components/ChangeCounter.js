// components/ChangeCounter.js
import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";  // Corrigido o caminho

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Adicionar valor ao contador
      </button>
    </div>
  );
};

export default ChangeCounter;
