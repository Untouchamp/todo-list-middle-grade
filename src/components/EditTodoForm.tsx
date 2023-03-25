import React, {FormEvent, useState} from "react";

export type TaskType = {
    id: string,
    task: string,
    completed: boolean,
    isEditing: boolean
}

export type EditTodoFormPropType = {
    editTask: Function,
    task: TaskType
}

export const EditTodoForm = (props : EditTodoFormPropType) => {
    const {editTask, task} = props
    const [value, setValue] = useState(task.task)

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (value.trim()) editTask(task.id, value.trim())

        setValue("")
    }

    return (
        <form className="flex mb-4"
              onSubmit={handleSubmit}>
            <div className="justify-items-stretch text-center h-full bg-transparent w-full text-white rounded-md cursor-pointer">
                <input type="text"
                       className="w-[calc(100%-2rem-60.6px)] bg-purple-500/30 text-left py-3 px-4 rounded-l-md bg-transparent text-white placeholder:text-white/30"
                       placeholder="Update task"
                       value={value}
                       maxLength={50}
                       onChange={(e) => setValue(e.target.value)}/>
                <button type="submit"
                        className="rounded-r-md py-3 px-4 bg-purple-500 text-white border-x border-purple-500 cursor-pointer"
                >Update</button>
            </div>
        </form>
    )
}