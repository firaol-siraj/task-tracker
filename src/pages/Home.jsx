import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"
import { useTasks } from "../store/taskContext"
function Home() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  return (
    <div className="container">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}
export default Home
