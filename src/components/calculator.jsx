import React, { useState } from "react";
import "./calculator.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function CalculatorApp() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    if ( input.trim() !== "" ) {
        try {
            const calculateResult = eval(input);
            setResult([...result, { expression: input, result: calculateResult }]);
            setInput("");
          } catch (error) {
            setResult([...result, { expression: input, result: "Error" }]);
            setInput("");
          }
    }
  };

  const handleResultClear = () => {
    setResult([]);
  }

  const handleClear = () => {
    setInput("");
    setResult([]);
  };
  
  return (
    <>
        <div className="calculator-container">
        {/* <div> */}
        <header className="header">
            <h1>Simple Calculator</h1>
            <div className="icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            </div>
        </header>
        <div className="history-container">
            <h2>Calculation History</h2>
            <div className="history">
            {result.map((item, index) => (
                <div key={index} className="history-item">
                <span>{item.expression}</span>
                <span> = </span>
                <span>{item.result}</span>
                </div>
            ))}
            <div>
                <button onClick={handleResultClear}>Empty Result</button>
            </div>
            </div>
        </div>
        <div className="calculator">
            <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter an expression"
            className="input-field"
            />
            <div className="buttons">
            <button onClick={() => setInput(input + '7')}>7</button>
            <button onClick={() => setInput(input + '8')}>8</button>
            <button onClick={() => setInput(input + '9')}>9</button>
            <button onClick={() => setInput(input + '/')}>/</button>
            <button onClick={() => setInput(input + '4')}>4</button>
            <button onClick={() => setInput(input + '5')}>5</button>
            <button onClick={() => setInput(input + '6')}>6</button>
            <button onClick={() => setInput(input + '*')}>*</button>
            <button onClick={() => setInput(input + '1')}>1</button>
            <button onClick={() => setInput(input + '2')}>2</button>
            <button onClick={() => setInput(input + '3')}>3</button>
            <button onClick={() => setInput(input + '-')}>-</button>
            <button onClick={() => setInput(input + '0')}>0</button>
            <button onClick={() => setInput(input + '.')}>.</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => setInput(input + '+')}>+</button>
            <button onClick={handleClear}>C</button>
            </div>
        </div>
        </div>
  
      <footer className="calculator-footer">
        © 2024 by tripat-jot
      </footer>
    </>
  );
}

export default CalculatorApp;
