import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});


export const ThemeProvider=ThemeContext.Provider

//Hook
export default function useTheme(){
    return useContext(ThemeContext)
}