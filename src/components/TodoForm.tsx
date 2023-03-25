import React, {FormEvent, useState} from "react";

export type TaskType = {
    id: string,
    task: string,
    completed: boolean,
    isEditing: boolean
}

export type TodoFormPropType = {
        addTask: Function
}

export const TodoForm = (props : TodoFormPropType) => {
    const {addTask} = props
    const [value, setValue] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (value.trim()) addTask(value.trim())

        setValue("")
    }

    return (
        <form className="w-full mt-4 mb-8 "
              onSubmit={handleSubmit}>
            <input type="text"
                   // className="outline-none bg-transparent border-solid border border-purple-500 py-2 px-4 mt-4 mb-8 w-[18.75rem] text-white placeholder:text-white/30"
                   className="outline-none bg-transparent border-solid border border-purple-500 m-0  py-2 px-4 w-[18.75rem] text-white placeholder:text-white/30"
                   placeholder="What's the task today?"
                   value={value}
                   maxLength={50}
                   onChange={(e) => setValue(e.target.value)}/>
            <button type="submit"
                    className="bg-purple-500 text-white border border-purple-500 p-2 cursor-pointer"
            >Add Task</button>
        </form>
    )
}