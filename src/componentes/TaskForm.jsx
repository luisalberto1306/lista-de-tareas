import { useState, useContext } from 'react'
import { TaskContext } from '../Contexto/TaskContext'

function TaskForm() {

    const [title, setTittle] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const { CreateTask } = useContext(TaskContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        CreateTask({
            title,
            descripcion
        })
        setTittle("")
        setDescripcion("")
    }


    return (

        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>CREA TU TAREA</h1>
                <input placeholder="escribe tu tarea" onChange={(e) => setTittle(e.target.value)} className="bg-slate-300 p-3 w-full mb-2" autoFocus />

                <textarea placeholder='nueva descripcion' onChange={(e) => { setDescripcion(e.target.value) }} className="bg-slate-300 p-3 w-full mb-2" value={descripcion} />
                <button onClick={() => {
                }} className="bg-indigo-500 px-3 py-1 text-white" value={title}>
                    presiona
                </button>
            </form>
        </div>

    )

}

export default TaskForm
