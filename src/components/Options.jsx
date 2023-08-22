import { useState } from "react";

function Options({ options, handleAnswerSelect }) {
    const optionItems = options.map((option, index) => <option>{option}</option>);

    const [selectedItem, setSelectedItem] = useState(0);

    const changeSelected = (selected) => {
        setSelectedItem(selected);
    };

    return (
        <>
            <h3>Options should go here</h3>
            <select onChange={(e) => changeSelected(e.target.value)}>
                {optionItems}
            </select>
            <button onClick={() => handleAnswerSelect(selectedItem)}>Next</button>
        </>
    );
}

export default Options;
