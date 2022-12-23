import {useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [...todos, todo];

        setTodos(newTodos);
    }

    const editTodo = (id, newValue) => {
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id ) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    const deleteTodo = id => {
        const removeArray = todos.filter(todo => todo.id !== id);

        setTodos(removeArray);
    }

    return (
        <div className='todo-list'>
            <h1>Tasker</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </div>
    )
}

export default ToDoList;