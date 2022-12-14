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
    <div className="cal">
      <input className="value" type="text" value={input}/>
      <button onClick={handleReset} className="numclear">C</button>
      <button onClick={handleOldValue} className="numclear">Del</button>
      <button name="*" onClick={(e) => setInput(input + e.target.name)} className="num">*</button>
      <button name="/" onClick={(e) => setInput(input + e.target.name)} className="num">/</button>
      <button name="9" onClick={(e) => setInput(input + e.target.name)} className="num">9</button>
      <button name="8" onClick={(e) => setInput(input + e.target.name)} className="num">8</button>
      <button name="7" onClick={(e) => setInput(input + e.target.name)} className="num">7</button>
      <button name="-" onClick={(e) => setInput(input + e.target.name)} className="num sub">-</button>
      <button name="6" onClick={(e) => setInput(input + e.target.name)} className="num">6</button>
      <button name="5" onClick={(e) => setInput(input + e.target.name)} className="num">5</button>
      <button name="4" onClick={(e) => setInput(input + e.target.name)} className="num">4</button>
      <button name="+" onClick={(e) => setInput(input + e.target.name)} className="num plus">+</button>
      <button name="3" onClick={(e) => setInput(input + e.target.name)} className="num">3</button>
      <button name="2" onClick={(e) => setInput(input + e.target.name)} className="num">2</button>
      <button name="1" onClick={(e) => setInput(input + e.target.name)} className="num">1</button>
      <button name="%" onClick={(e) => setInput(input + e.target.name)} className="num">%</button>
      <button name="0" onClick={(e) => setInput(input + e.target.name)} className="num">0</button>
      <button name="00" onClick={(e) => setInput(input + e.target.name)} className="num">00</button>
      <button name="000" onClick={(e) => setInput(input + e.target.name)} className="num">000</button>
      <button  onClick={handleAnswer} className="num equal">=</button>

    </div>
  );
};

export default App
