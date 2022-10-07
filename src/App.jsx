import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ColorContext from "./context/ColorContext";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const initialColor = useDarkMode();
  return (
    <ColorContext.Provider value={initialColor}>
      <Header />
      <Main />
      <Footer />
    </ColorContext.Provider>
  );
}

export default App;
