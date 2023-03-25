import React from 'react';
import {TaskType} from "./components/TodoForm";

import './App.css';
import {TodoWrapper} from "./components/TodoWrapper";
import {v4 as uuidv4} from "uuid";

function App() {

    const todoTasks: Array<TaskType> = [
        {
            id: uuidv4(),
            task: "Brush your teeth",
            completed: false,
            isEditing: false
        },
        {
            id: uuidv4(),
            task: "Go to school",
            completed: false,
            isEditing: false
        },
        {
            id: uuidv4(),
            task: "Buy groceries",
            completed: false,
            isEditing: false
        },
        {
            id: uuidv4(),
            task: "Pay bills",
            completed: true,
            isEditing: false
        },
        {
            id: uuidv4(),
            task: "Call mom",
            completed: false,
            isEditing: false
        }
    ]

    return (
        <div className="text-center">
            <TodoWrapper todoTasks={todoTasks}/>
        </div>
    );
}

export default App;
