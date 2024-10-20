import { useState, useContext } from 'react'
import { TaskContext } from "../context/TaskContext"

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)

    const manejarForm = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        });
        setTitle("")
        setDescription("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={manejarForm} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl text-white font-bold pb-3">Crea tu Tarea</h1>
                <input
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-2"
                />
                <textarea
                    placeholder='Escribe la descripción de la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={description}
                >
                </textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
            </form>
        </div>

    )
}

export default TaskForm
