"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("yagnesh");
  const [backgroundColor, setBackgroundColor] = useState("red");

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
      }}
    >
      <button
        onClick={() => {
          //   setCount(5);
          setCount((val) => {
            return val + 1;
          });
          setName("rohit");
          setBackgroundColor("green");
        }}
        style={{
          padding: 16,
          backgroundColor: backgroundColor,
          fontSize: 20,
        }}
      >
        +
      </button>
      <p
        style={{
          fontSize: 24,
        }}
      >
        {count}
      </p>
      <button
        onClick={() => {
          setCount((val) => {
            return val - 1;
          });
        }}
        style={{
          padding: 16,
          backgroundColor: "dodgerblue",
          fontSize: 20,
        }}
      >
        -
      </button>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Counter;
