import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(0);
  function IncrementCount() {
    setCount(count + factor);
  }
  function DecrementCount() {
    setCount(count - factor);
  }
  function IncrementFactor() {
    setFactor(count + 1);
  }
  function DecrementFactor() {
    setFactor(count - 1);
  }
  return (
    <div>
      <h1> This is my Counter : {count}</h1>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <h1>Set Factor : {factor}</h1>
      <button onClick={IncrementFactor}>Increment</button>
      <button onClick={DecrementFactor}>Decrement</button>
    </div>
  );
};

export default Counter;
