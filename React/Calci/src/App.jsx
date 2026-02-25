import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    // Prevent starting with an operator or multiple consecutive operators
    if (input === "" && /[+\-*/]/.test(value)) return;
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    if (input === "") return;

    try {
      // Safely evaluate the math string using the Function constructor
      const result = new Function('return ' + input)();

      // Check for infinity (e.g., dividing by zero)
      if (!isFinite(result) || Number.isNaN(result)) {
        setInput("Error");
      } else {
        // Round to 4 decimal places to avoid floating point precision issues
        const formattedResult = Math.round(result * 10000) / 10000;
        setInput(formattedResult.toString());
      }
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          {input || "0"}
        </div>

        <div className="keypad">
          <button onClick={handleClear} className="btn clear">C</button>
          <button onClick={() => handleClick('/')} className="btn operator">/</button>
          <button onClick={() => handleClick('*')} className="btn operator">*</button>
          <button onClick={() => handleClick('-')} className="btn operator">-</button>

          <button onClick={() => handleClick('7')} className="btn">7</button>
          <button onClick={() => handleClick('8')} className="btn">8</button>
          <button onClick={() => handleClick('9')} className="btn">9</button>
          <button onClick={() => handleClick('+')} className="btn operator plus">+</button>

          <button onClick={() => handleClick('4')} className="btn">4</button>
          <button onClick={() => handleClick('5')} className="btn">5</button>
          <button onClick={() => handleClick('6')} className="btn">6</button>

          <button onClick={() => handleClick('1')} className="btn">1</button>
          <button onClick={() => handleClick('2')} className="btn">2</button>
          <button onClick={() => handleClick('3')} className="btn">3</button>

          <button onClick={() => handleClick('0')} className="btn zero">0</button>
          <button onClick={() => handleClick('.')} className="btn">.</button>
          <button onClick={handleCalculate} className="btn equals">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;