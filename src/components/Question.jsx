import Options from "./Options";

function Question({ question, options, handleAnswerSelect }) {
  return (
    <>
      <Options handleAnswerSelect={handleAnswerSelect} />
    </>
  );
}

export default Question;
