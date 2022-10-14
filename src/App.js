import React, {useState} from "react";
import"./App.css";
const App = () => {
  const [input, setInput] = useState("");

  //for answer

const handleAnswer = ( ) => {
  try {
  setInput(eval(input));
  } catch (error) {
    setInput("Error");
  }
};

const handleReset = () => {
  setInput("");
};

const handleOldValue = () => {
  setInput(input.slice(0, input.length - 1 ));
}
  return (
    <div class="cal">
      <input class="value" type="text" value={input}/>
      <button onClick={handleReset} class="numclear">C</button>
      <button onClick={handleOldValue} class="numclear">Del</button>
      <button name="*" onClick={(e) => setInput(input + e.target.name)} class="num">*</button>
      <button name="/" onClick={(e) => setInput(input + e.target.name)} class="num">/</button>
      <button name="9" onClick={(e) => setInput(input + e.target.name)} class="num">9</button>
      <button name="8" onClick={(e) => setInput(input + e.target.name)} class="num">8</button>
      <button name="7" onClick={(e) => setInput(input + e.target.name)} class="num">7</button>
      <button name="-" onClick={(e) => setInput(input + e.target.name)} class="num sub">-</button>
      <button name="6" onClick={(e) => setInput(input + e.target.name)} class="num">6</button>
      <button name="5" onClick={(e) => setInput(input + e.target.name)} class="num">5</button>
      <button name="4" onClick={(e) => setInput(input + e.target.name)} class="num">4</button>
      <button name="+" onClick={(e) => setInput(input + e.target.name)} class="num plus">+</button>
      <button name="3" onClick={(e) => setInput(input + e.target.name)} class="num">3</button>
      <button name="2" onClick={(e) => setInput(input + e.target.name)} class="num">2</button>
      <button name="1" onClick={(e) => setInput(input + e.target.name)} class="num">1</button>
      <button name="%" onClick={(e) => setInput(input + e.target.name)} class="num">%</button>
      <button name="0" onClick={(e) => setInput(input + e.target.name)} class="num">0</button>
      <button name="00" onClick={(e) => setInput(input + e.target.name)} class="num">00</button>
      <button name="000" onClick={(e) => setInput(input + e.target.name)} class="num">000</button>
      <button  onClick={handleAnswer} class="num equal">=</button>

    </div>
  );
};

export default App
