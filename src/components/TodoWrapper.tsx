import {TodoForm, TaskType} from "./TodoForm";
import React, {useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Todo} from "./Todo";
import {closestCenter, DndContext, DragEndEvent} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";

export type TodoWrapperType = {
    todoTasks: Array<TaskType>
}

export const TodoWrapper = (props: TodoWrapperType) => {
    const {todoTasks} = props;
    const [tasks, setTasks] = useState<Array<TaskType>>(todoTasks)

    const addTask = (task: string) => {
        const ordNum = tasks.length + 1;
        setTasks([...tasks,
            {
                id: uuidv4(),
                orderNumber: ordNum,
                task: task,
                completed: false,
                isEditing: false
            }])
    }

    const deleteTodo = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const editTodo = (id: string) => {
        setTasks(tasks.map(task => task.id === id ? {...task, isEditing: !task.isEditing} : task))
    }
    const editTask = (id: string, taskText: string) => {
        setTasks(tasks.map(task => task.id === id ? {...task, task: taskText, isEditing: !task.isEditing} : task))
    }

    const toggleComplete = (id: string) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }
    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {
            setTasks((items) => {
                const activeIndex = items.indexOf(items.find(i => i.id === active.id));
                // const activeIndex = 0;
                const overIndex = items.indexOf(items.find(i => i.id === over?.id));
                // const overIndex = 1;
                return arrayMove(items, activeIndex, overIndex);
            })
        }
    }
    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className="bg-gray-800 mt-20 p-8 rounded-md shadow-3xl">
                <h1>GET THINGS DONE</h1>
                <TodoForm addTask={addTask}/>
                <SortableContext
                    items={tasks}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map((task) => (
                            <Todo
                                key={task.id}
                                task={task}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                                editTask={editTask}
                                toggleComplete={toggleComplete}
                            />
                        )
                    )}
                </SortableContext>

            </div>
        </DndContext>
    )
}
