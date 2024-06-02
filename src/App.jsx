import { useState } from "react";
import Boton from "./components/Boton";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [numclicks, setnumclicks] = useState(0);

  const handle_click = () => {
    setnumclicks(numclicks + 1);
  };
  const restart = () => {
    setnumclicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter clicks={numclicks}></Counter>
        <Boton
          text="Click"
          isbuttonclick={true}
          handle_click={handle_click}
        ></Boton>
        <Boton
          text="Restart"
          isbuttonclick={false}
          handle_click={restart}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
