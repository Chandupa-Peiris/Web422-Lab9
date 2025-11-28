// components/Calculator.js
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const append = (val) => {
    // replace initial "0" if starting
    if (display === "0") {
      setDisplay(String(val));
    } else {
      setDisplay((d) => d + String(val));
    }
  };

  const handleDigit = (digit) => () => append(digit);
  const handleOp = (op) => () => {
    
    const last = display[display.length - 1];
    if ("+-*/".includes(last)) {
      setDisplay((d) => d.slice(0, -1) + op);
    } else {
      append(op);
    }
  };

  const handleClear = () => setDisplay("0");

  const handleEquals = () => {
    try {
      
      let expr = display;
      while (expr.length && "+-*/".includes(expr[expr.length - 1])) {
        expr = expr.slice(0, -1);
      }
      
      
      const result = eval(expr);
      if (Number.isFinite(result)) setDisplay(String(result));
      else setDisplay("Error");
    } catch (e) {
      setDisplay("Error");
    }
  };

  const handleE = () => {
    
    
    const last = display[display.length - 1];
    if (last && last !== "E" && !"+-*/".includes(last)) {
      setDisplay((d) => d + "E");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "2rem auto", textAlign: "center" }}>
      <h2>Calculator</h2>

      {/* read-only display */}
      <input
        id="calc-display"
        type="text"
        readOnly
        value={display}
        aria-label="Calculator display"
        style={{
          width: "100%",
          fontSize: "1.5rem",
          padding: "0.5rem",
          textAlign: "right",
          marginBottom: "0.5rem",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {/* digits 7 8 9 / */}
        <button id="btn-7" onClick={handleDigit(7)}>7</button>
        <button id="btn-8" onClick={handleDigit(8)}>8</button>
        <button id="btn-9" onClick={handleDigit(9)}>9</button>
        <button id="btn-divide" onClick={handleOp("/")}>/</button>

        {/* 4 5 6 * */}
        <button id="btn-4" onClick={handleDigit(4)}>4</button>
        <button id="btn-5" onClick={handleDigit(5)}>5</button>
        <button id="btn-6" onClick={handleDigit(6)}>6</button>
        <button id="btn-multiply" onClick={handleOp("*")}>*</button>

        {/* 1 2 3 - */}
        <button id="btn-1" onClick={handleDigit(1)}>1</button>
        <button id="btn-2" onClick={handleDigit(2)}>2</button>
        <button id="btn-3" onClick={handleDigit(3)}>3</button>
        <button id="btn-subtract" onClick={handleOp("-")}>-</button>

        {/* 0 E = + */}
        <button id="btn-0" onClick={handleDigit(0)}>0</button>
        <button id="btn-e" onClick={handleE}>E</button>
        <button id="btn-equals" onClick={handleEquals}>=</button>
        <button id="btn-add" onClick={handleOp("+")}>+</button>

        {/* full width clear */}
        <div style={{ gridColumn: "1 / -1" }}>
          <button id="btn-clear" onClick={handleClear} style={{ width: "100%" }}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}
