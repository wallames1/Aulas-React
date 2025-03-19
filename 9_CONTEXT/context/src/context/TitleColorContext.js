import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { color: action.payload };
        default:
            return state;
    }
};

export const TitleColorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

    console.log("title color context: ", state);

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
    
};
