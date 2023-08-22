function Options({ options, handleAnswerSelect }) {
  const optionItems = options.map((option, index) => <li>{option}</li>);
  return (
    <>
      <h1>Options should go here</h1>
      <ul>{optionItems}</ul>
    </>
  );
}

export default Options;
