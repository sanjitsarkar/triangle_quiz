import React, { useState } from "react";
export const IsTriangle = () => {
  const [angle1, setAngle1] = useState();
  const [angle2, setAngle2] = useState();
  const [angle3, setAngle3] = useState();
  const [output, setOutput] = useState("");

  function sumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
  }
  const checkTriangle = (e) => {
    e.preventDefault();
    if (!angle1 || !angle2 || !angle3) {
      setOutput("Please fill up every input field...");
      return;
    }
    const sum = sumOfAngles(Number(angle1), Number(angle2), Number(angle3));
    if (sum === 180) {
      setOutput("Yay, the angles form a triangle!");
    } else {
      setOutput("Oh Oh! The angle doesn't form a triangle");
    }
  };
  return (
    <form onSubmit={(e) => checkTriangle(e)}>
      <h3>Angles of triangles</h3>

      <input
        type="number"
        placeholder="Angle1"
        value={angle1}
        onChange={(e) => {
          setAngle1(e.target.value);
        }}
        required
      />

      <input
        min="1"
        type="number"
        placeholder="Angle2"
        value={angle2}
        onChange={(e) => {
          setAngle2(e.target.value);
        }}
        required
      />
      <input
        min="1"
        type="number"
        placeholder="Angle3"
        value={angle3}
        onChange={(e) => {
          setAngle3(e.target.value);
        }}
        required
      />
      <button type="submit">Is Triangle?</button>
      <p className="output">{output}</p>
    </form>
  );
};
