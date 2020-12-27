import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [operator, setOperator] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const calculate = (a, b) => {
    switch (operator) {
      case "division":
        return division(a, b);
      case "multiply":
        return product(a, b);
      case "minus":
        return diff(a, b);
      case "plus":
        return sum(a, b);
    }
  };

  const sum = (a, b) => {
    return a + b;
  };

  const diff = (a, b) => {
    return a - b;
  };

  const product = (a, b) => {
    return a * b;
  };

  const division = (a, b) => {
    return b !== 0 ? a / b : "You can not divide by 0";
  };

  return (
    <div>
      <div className="calculator">
        <div>{a}</div>
      </div>

      <div className="grid-container">
        <button
          className="btn"
          onClick={() => {
            if (a !== "") {
              setA(a + "7");
            } else setA("7");
          }}
        >
          7
        </button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button onClick={() => setOperator("division")} className="btn">
          /
        </button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button onClick={() => setOperator("multiply")} className="btn">
          *
        </button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button onClick={() => setOperator("minus")} className="btn">
          -
        </button>
        <button className="btn">0</button>
        <button className="btn">,</button>
        <button onClick={() => calculate()} className="btn">
          =
        </button>
        <button onClick={() => setOperator("plus")} className="btn">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
