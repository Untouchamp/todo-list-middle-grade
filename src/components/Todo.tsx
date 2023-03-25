import {TaskType} from "./TodoForm";
import {EditTodoForm} from "./EditTodoForm";
import React from "react";
import {CSS} from "@dnd-kit/utilities";
import {useSortable} from "@dnd-kit/sortable";

export type TodoPropsType = {
    task: TaskType,
    deleteTodo: Function,
    editTodo: Function,
    editTask: Function,
    toggleComplete: Function
}

export const Todo = (props : TodoPropsType) => {
    const {task, deleteTodo, editTodo, editTask, toggleComplete} = props

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.task.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {task.isEditing ? (
                <EditTodoForm key={task.id} editTask={editTask} task={task}/>
            ) : (
                <div className="flex justify-between text-center bg-purple-500 text-white py-3 px-4 rounded-md mb-4 cursor-pointer"
                     onDoubleClick={() => editTodo(task.id)}>
                    <p className={`${task.completed ? 'text-purple-200 line-through' : ""} w-fit text-left`}
                       onClick={() => toggleComplete(task.id)}>{task.task}</p>
                    <div className="flex ml-6">
                        <button type="button"
                                onClick={() => editTodo(task.id)}
                        >
                            <svg className="h-5 w-5 text-white mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>

                        </button>
                        <button type="button"
                                onClick={() => deleteTodo(task.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
        )
}