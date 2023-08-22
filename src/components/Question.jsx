import Options from "./Options";

function Question({ question, options, handleAnswerSelect }) {
    return (
        <>
            <h3>Here is where the questions will go</h3>
            <h1>{question.question}</h1>
            <Options options={options} handleAnswerSelect={handleAnswerSelect} />
        </>
    );
}

export default Question;
