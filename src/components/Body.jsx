import React, { useEffect, useState } from "react";

export const Body = () => {
  const [output, setOutput] = useState("");
  const [clickedOptions, setClickedOptions] = useState([]);
  const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];
  const questions = [
    {
      title: `  What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?`,
      options: ["45°", "90°", "60°"],
    },
    {
      title: ` What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?`,
      options: ["obtuse", "acute", "right angled"],
    },
    {
      title: `A triangle can have`,
      options: ["one right angle", "two right angle"],
    },
    {
      title: `Which of the following can form a right angled triangle?`,
      options: ["14, 15, 26", "12, 16, 20"],
    },
    {
      title: `Which of the following triangles are always similar?`,
      options: ["Equilateral triangle", "Isosceles triangle"],
    },
    {
      title: `If one angle of a triangle is obtuse, then which one of the
            following is the possible measure of remaining angles?`,
      options: ["100°", "85°"],
    },
    {
      title: `If the largest angle in a triangle is 70°, what is the least
            possible value of the smallest angle of the triangle?`,
      options: ["30°", "10°"],
    },
    {
      title: `The perimeter of scalene triangle with sides a, b, c is`,
      options: ["a + b + c", "2a", "None of these"],
    },
    {
      title: `A scalene triangle has ___ lines of symmetry`,
      options: ["two", "no", "15"],
    },
    {
      title: `There is a right triangle PQR where: angle Q = 90°; angle P = angle
            R. What is the measure of angles P and R?`,
      options: ["85°", "65°", "45°"],
    },
  ];
  function calculateScore(e) {
    e.preventDefault();
    if (clickedOptions.length) {
      let score = 0;
      clickedOptions.forEach((option, index) => {
        console.log("option", option, "correctAnswers", correctAnswers[index]);
        if (option === correctAnswers[index]) score++;
      });
      console.log("The score is " + score);
      setOutput("The score is " + score);
    } else {
      setOutput("Please answer all the question");
    }
  }
  // useEffect(() => {
  //   console.log("clickedOptions", clickedOptions);
  // }, [clickedOptions]);
  return (
    <main className="quiz_main">
      <h1 id="title">Quiz on triangles</h1>
      <h2>For each correct answer you will get 1 point</h2>
      <form className="quiz_form" onSubmit={(e) => calculateScore(e)}>
        {questions.map((question) => (
          <div className="question_container" key={question.title}>
            <p>{question.title}</p>
            {question.options.map((option) => (
              <div className="option" key={option}>
                <label>{option}</label>
                <input
                  id="radio"
                  type="radio"
                  name={question.title}
                  value={option}
                  onChange={(e) =>
                    setClickedOptions([...clickedOptions, e.target.value])
                  }
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="btn_check" id="submit_answers_btn">
          Submit Answers
        </button>
        <p className="output">{output}</p>
      </form>
    </main>
  );
};
