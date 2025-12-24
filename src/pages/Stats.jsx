import { useTasks } from "../store/taskContext"

function Stats() {
  const { tasks } = useTasks()

  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const remaining = total - completed

  return (
    <div className="container stats">
      <h2>Task Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{total}</p>
        </div>
        <div className="stat-card completed">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
        <div className="stat-card remaining">
          <h3>Remaining</h3>
          <p>{remaining}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
