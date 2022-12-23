import {useState, useEffect, useRef} from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
            isCompleted: false
        });

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    console.log(props)

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder={props.edit ? 'Edit Item' : 'Add Item'}
                value={input}
                type='text'
                onChange={handleChange}
                ref={inputRef}
                className='text-input'
            />
            <button className='submit-button'>Submit</button>
        </form>
    )
}

export default ToDoForm;