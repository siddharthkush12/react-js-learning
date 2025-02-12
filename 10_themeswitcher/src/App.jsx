import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card"

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex flex-wrap items-center ">
        <div className="w-full">
          <div className="max-w-sm mx-auto flex justify-end my-3">
            <Themebtn/>
          </div>
          <div className="max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
