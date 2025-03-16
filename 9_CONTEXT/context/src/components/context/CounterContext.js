//1 - criar context

import {createContext, useState} from "react"

const CounterContext = createContext();

 //2 criar - provider
 export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value ={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
 }
 export default CounterContext;