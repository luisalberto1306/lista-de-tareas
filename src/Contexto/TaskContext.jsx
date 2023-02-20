import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'


export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  function CreateTask(task, descripcion) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      descripcion: task.descripcion
    }])
  }

  function DeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }


  useEffect(() => {
    setTasks(data)
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      DeleteTask,
      CreateTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext
