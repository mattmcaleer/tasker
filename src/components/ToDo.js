import {useState} from 'react';
import ToDoForm from './ToDoForm';
import { GrCheckbox, GrCheckboxSelected, GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

function ToDo({ todos, completeTodo, deleteTodo, editTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitEdit = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitEdit} />
    }

    return (
        todos.map((todo) => (
            <div key={todo.id} className={ todo.isCompleted ? 'todo-complete' : 'todo' }>
                <div className='text-container'>
                    <div className='checkbox' onClick={() => completeTodo(todo.id)}>
                        {todo.isCompleted ? <GrCheckboxSelected size='2em' /> : <GrCheckbox size='2em' />}
                    </div>
                    <div className='todo-text'>
                        {todo.text}
                    </div>
                    <RiDeleteBinLine
                        className='delete-icon'
                        size='2em'
                        onClick={() => deleteTodo(todo.id)} 
                    />
                    <GrEdit
                        className='edit-icon'
                        size='2em'
                        onClick={() => setEdit({ id: todo.id, value: todo.value })}
                    />
                </div>
            </div>
        ))
    )
}

export default ToDo;