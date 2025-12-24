import { createContext, useContext, useState, useEffect } from "react"
const TaskContext = createContext()
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks")
    return storedTasks ? JSON.parse(storedTasks) : []
  })
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  const addTask = (task) => {
    setTasks(prev => [...prev, task])
  }
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }
  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
export const useTasks = () => useContext(TaskContext)
