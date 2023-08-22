import Question from "../components/Question";
import Options from "../components/Options";
import React from "react";
import { useState } from "react";
// ### Quiz Component
// The `Quiz` component is the main component of the quiz application. It tracks the current question and the user's score. There is also a function to handle adjusting the score and increasing the current question when an answer is selected.
// #### States:
// - **currentQuestionIndex:** This state keeps track of the index of the current question being displayed. It starts at 0 and increments as the user moves to the next question.
// - **score:** This state tracks the user's final score. It is initially set to 0 and is incremented whenever the user selects the correct answer for a question.
// #### Function:
// - **handleAnswerSelect:** This function is called when the user selects an answer for a question. It compares the selected answer with the correct answer for the current question. If the selected answer is correct, the score is incremented. It also advances the current question index to display the next question.
function QuizContainer() {
  //current Question index state
  const [currentQuestionIndex, setCurrentQUestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (selectedAnswer) => {
    //find current question object
    //get question.answer
    //if selectedAnswer == question.answer:
    //score++
    if (selectedAnswer == question.answer) {
      score += 1;
    }
  };
  return (
    <>
      <Question
        question={question}
        options={options}
        handleAnswerSelect={handleAnswerSelect}
      />
    </>
  );
}

export default QuizContainer;
