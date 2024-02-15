import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isgamestarted, setisgamestarted] = useState(false);

  const TogglePlay = () => {
    setisgamestarted((prev) => !prev);
  };
  return (
    <>
      {
        isgamestarted ? <GamePlay /> : <StartGame toggle={TogglePlay} /> 
      }
      
    </>
  );
}

export default App;
