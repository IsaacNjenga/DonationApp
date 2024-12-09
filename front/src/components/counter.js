import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Define the increment speed and step
    const speed = 10; // in milliseconds
    const step = Math.ceil(targetNumber / 100); // Adjust step size based on targetNumber

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + step >= targetNumber) {
          clearInterval(interval);
          return targetNumber; // Ensure it stops at the targetNumber
        }
        return prevCount + step;
      });
    }, speed);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [targetNumber]);

  return <h1>{count}</h1>;
};

export default Counter;
