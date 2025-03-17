// context/CounterContext.js
import { createContext, useState } from "react";

export const CounterContext = createContext();  // Exportação nomeada

// Criando o Provider
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
