import TaskItem from "./TaskItem"
function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <>
        <div className="task-titles">
            <h2 className="task-status">Status</h2>
            <h2 className="task-name">Task</h2>
            <h2 className="task-remove">Remove</h2>
        </div>
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </ul>
    </>
    
  )
}
export default TaskList
