import React, { useState } from "react";
const Hypotenous = () => {
  const [firstSideValue, setFirstSideValue] = useState();
  const [secondSideValue, setSecondSideValue] = useState();
  const [output, setOutput] = useState("");

  function calculateSumOfSquare(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
  }

  const calcHypo = (e) => {
    e.preventDefault();
    if (firstSideValue && secondSideValue) {
      const sumOfSquares = calculateSumOfSquare(
        Number(firstSideValue),
        Number(secondSideValue)
      );
      const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
      setOutput("The length of hypotenuse is " + lengthOfHypotenuse);
    } else {
      setOutput("Please fill up every input field...");
    }
  };
  return (
    <form onSubmit={(e) => calcHypo(e)}>
      <h3>Calculate Hypotenuse of a triangle</h3>

      <input
        type="number"
        placeholder="Enter base value a"
        value={firstSideValue}
        onChange={(e) => setFirstSideValue(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Enter height value b"
        min="1"
        value={setSecondSideValue}
        onChange={(e) => setSecondSideValue(e.target.value)}
        required
      />

      <button type="submit">Calculate hypotenuse</button>
      <div>
        <h4 id="hypo">Hypotenuse formula</h4>
        <h4>√(base² + height²)</h4>
      </div>
      <p className="output">{output}</p>
    </form>
  );
};

export default Hypotenous;
