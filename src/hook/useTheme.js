import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextIntance.js";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) throw new Error("useTheme prescisa de um ThemeProvider");


  return context;
}