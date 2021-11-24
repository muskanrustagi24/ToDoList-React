import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList(props) {
    const [todos, setTodos] = useState([]);
    
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm />
        </div>
    );
};

export default TodoList;
