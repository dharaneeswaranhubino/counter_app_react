import { useState } from "react";
// import "./counter.css";

const CounterApp = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Counter App</h1>

        <div className="counter-value">{count}</div>

        <div className="buttons">
          <button className="decrease" onClick={decrease}>
            -
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

          <button className="increase" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;