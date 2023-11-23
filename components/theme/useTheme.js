import { useContext } from "react";
import { ThemeContext } from "./ThemeContex";

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
