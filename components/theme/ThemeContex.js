import { createContext } from "react";
import { useReducer } from "react";

const themeReduser = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReduser, {
    color: "blue",
    mode: "black"
  });

  const changeColor = color => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = mode => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
