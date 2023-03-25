import React from 'react';
import {TaskType} from "./components/TodoForm";

import './App.css';
import {TodoWrapper} from "./components/TodoWrapper";
import {v4 as uuidv4} from "uuid";

function App() {

    const todoTasks: Array<TaskType> = [
        {
            id: uuidv4(),
            orderNumber: 1,
            task: "Brush the teeth",
            completed: false,
            isEditing: false
        },
        {
            id: uuidv4(),
            orderNumber: 2,
            task: "Go to the school",
            completed: false,
            isEditing: false
        }

    ]

    // https://www.youtube.com/watch?v=LoYbN6qoQHA&t=51s&ab_channel=OpeAfolabi
    // REDUX https://www.youtube.com/watch?v=fiesH6WU63I&ab_channel=ChrisBlakely
    return (
        <div className="text-center">
            <TodoWrapper todoTasks={todoTasks}/>
        </div>
    );
}

export default App;
