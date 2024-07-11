import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component mounted or updated. Current count is ${count}`);

    return () => {
      console.log('Component will unmount');
    };
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter</h1>
      <p className="counter-value">Current count: {count}</p>
      <button className="counter-button" onClick={increment}>Increment</button>
      <button className="counter-button" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
