import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import logo from "./img/freecodecamp-logo.png";

function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  const restartCounter = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="app-logo" src={logo} alt="logo" />
      </div>

      <div className="main-container">
        <Counter num={number} />
        <Button text="Click Me" isClickBtn={true} handleClick={handleClick} />
        <Button
          text="Restart"
          isClickBtn={false}
          handleClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
