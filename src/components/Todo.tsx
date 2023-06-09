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

export const Todo = (props: TodoPropsType) => {
    const {task, deleteTodo, editTodo, editTask, toggleComplete} = props

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: task.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div className="flex relative justify-between">
            <span className="flex items-center py-3 px-1 mb-4 cursor-grab text-purple-400" {...listeners}
                  style={style} {...attributes}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </span>
            {task.isEditing ? (
                <EditTodoForm setNodeRef={setNodeRef}
                              style={style}
                              attributes={attributes}
                              key={task.id}
                              editTask={editTask}
                              task={task}/>
            ) : (
                <div ref={setNodeRef}
                     style={style}
                     {...attributes}
                     className="flex justify-between w-full text-center bg-purple-500 text-white py-3 px-4 rounded-md mb-4 cursor-pointer"
                     onDoubleClick={() => !task.completed? editTodo(task.id) : {}}
                >
                    <p className={`${task.completed ? 'text-purple-300 line-through' : ""} w-fit text-left`}
                       onClick={() => toggleComplete(task.id)}>{task.task}</p>
                    <div className="flex items-center ml-6">
                        <button type="button"
                                disabled={task.completed}
                                onClick={() => editTodo(task.id)}
                        >
                            <svg className={`${task.completed? "text-purple-400":"text-white"} h-5 w-5 mt-0.5 mr-2`} xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>

                        </button>
                        <button type="button"
                                onClick={() => deleteTodo(task.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
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