import React, { useState } from "react";

export const Area = () => {
  const [firstSideValue, setFirstSideValue] = useState();
  const [secondSideValue, setSecondSideValue] = useState();
  const [thirdSideValue, setThirdSideValue] = useState();
  const [output, setOutput] = useState("");
  const calcArea = (e) => {
    e.preventDefault();
    if (!firstSideValue || !secondSideValue || !thirdSideValue) {
      output("Please fill up every input field...");
      return;
    }
    if (
      firstSideValue + secondSideValue > thirdSideValue &&
      secondSideValue + thirdSideValue > firstSideValue &&
      firstSideValue + thirdSideValue > secondSideValue
    ) {
      const semiPerimeter =
        (firstSideValue + secondSideValue + thirdSideValue) / 2;

      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSideValue) *
          (semiPerimeter - secondSideValue) *
          (semiPerimeter - thirdSideValue)
      ).toFixed(4);
      setOutput(`Area of a triangle using heron's formula is ${result} units`);
    } else {
      setOutput("Enter valid side lengths such that each side lengths");
    }
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
          placeholder="Enter first side of a triangle"
          value={firstSideValue}
          onChange={(e) => setFirstSideValue(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Enter second side of a triangle"
          value={secondSideValue}
          onChange={(e) => setSecondSideValue(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter third side of a triangle"
          value={thirdSideValue}
          onChange={(e) => setThirdSideValue(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      <p className="output">{output}</p>
    </main>
  );
};
