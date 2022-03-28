import React, { useState } from 'react';

function TodoForm(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
        let txt = event.target.value;
        setText(txt);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("");
        }
    }

    return (
        <form className="todoForm">
            <input onChange={handleChange} type="text" value={text}></input>
            <button className="todoButton" onClick={addItem}>Add</button>
        </form> 
    );
}

export default TodoForm;
