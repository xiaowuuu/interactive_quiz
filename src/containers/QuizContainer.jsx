import Question from "../components/Question";
import { useState } from "react";

function QuizContainer() {
  const [currentQuestionIndex, setCurrentQUestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState([
    {
      question:
        "What was the name of the first computer virus that spread in the wild?",
      options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
      answer: "Brain",
    },
    {
      question:
        "Which programming language is often referred to as the 'mother of all languages'?",
      options: ["Java", "C", "Fortran", "Assembly"],
      answer: "C",
    },
    {
      question: "In what year was the company Google founded?",
      options: ["1996", "1998", "2000", "2004"],
      answer: "1998",
    },
  ]);

  const question = questions[currentQuestionIndex];
  const options = question["options"];

  const handleAnswerSelect = (selectedAnswer) => {
    const question_answer = question.answer;
    if (selectedAnswer == question_answer) {
      setScore(score + 1);
    }
    console.log(`score: ${score}`);
    console.log(`selectedAnswer: ${selectedAnswer}`);
  };

  const nextQuestion = () => {
    setCurrentQUestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <h1>Score: {score}</h1>
      <Question
        question={question}
        options={options}
        handleAnswerSelect={handleAnswerSelect}
      />
      <button onClick={nextQuestion}>Next</button>
    </>
  );
}

export default QuizContainer;
