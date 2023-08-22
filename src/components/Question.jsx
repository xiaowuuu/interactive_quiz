// ### Question Component

// The `Question` component is responsible for displaying a single question and its corresponding options to the user.

// #### Props:

// - **question:** The text of the question to be displayed.

// - **options:** An array of possible answer options for the question.

// - **handleAnswerSelect:** A function passed from the `Quiz` component that handles the user's answer selection.
function Question({ question, options, handleAnswerSelect }) {
  return (
    <>
      <Options handleAnswerSelect={handleAnswerSelect} />
    </>
  );
}

export default Question;
