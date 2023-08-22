import Options from "./Options";

function Question({ question, options, handleAnswerSelect }) {
  return (
    <>
      <h1>Here is where the questions will go</h1>
      <h3>{question.question}</h3>
      <Options options={options} handleAnswerSelect={handleAnswerSelect} />
    </>
  );
}

export default Question;
