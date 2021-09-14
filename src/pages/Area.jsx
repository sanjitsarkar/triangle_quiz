import React, { useState } from "react";

export const Area = () => {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [output, setOutput] = useState("");
  const calcArea = (e) => {
    e.preventDefault();
    if (!base || !height) {
      output("Please fill up every input field...");
      return;
    }

    const result = (0.5 * base * height).toFixed(4);
    setOutput(`Area of a triangle is ${result} units`);
  };
  return (
    <main
      className="calculate_area"
      onSubmit={(e) => {
        calcArea(e);
      }}
    >
      <h1>Calculate Area of a triangle</h1>
      <form>
        <input
          type="number"
          min="1"
          placeholder="Enter the base of the triangle"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          required
        />

        <input
          type="number"
          min="1"
          placeholder="Enter the height of the triangle"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <button type="submit">Calculate</button>
        <p className="output">{output}</p>
      </form>
    </main>
  );
};
