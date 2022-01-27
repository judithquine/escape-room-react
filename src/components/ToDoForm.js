import React, {useState} from "react";

function ToDoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className='toDo-form'>
            <input type='text' placeholder='Add a to do' value={input} name='text' className='toDo-input' onChange={handleChange}/>
            <button className='toDo-button'>Add something to do</button>
        </form>
    )
}

export default ToDoForm