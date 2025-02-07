import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15); //default counter=15
  //USESTATE return array where first index contain counter/variable, second index contain function(setCounter) and then in page where counter variable is visible then it changes everywhere according to function(setCounter)

  // let counter=5;

  const addVal = () => {
    if (counter < 25) {
      setCounter(++counter);
    } else if (counter === "Limit Exceed") {
      setCounter(15);
    } else {
      setCounter("Limit Exceed");
    }
  };
  const decVal = () => {
    if (counter > 0) {
      setCounter(--counter);
    } else if (counter === "Limit Exceed") {
      setCounter(15);
    }
  };
  return (
    <>
      <h1>counter value: {counter}</h1>
      <button onClick={addVal}>Increase</button>
      <button onClick={decVal}>Decrease</button>
      <p>{counter}</p>
      <span>{counter}</span>
    </>
  );
}

export default App;
