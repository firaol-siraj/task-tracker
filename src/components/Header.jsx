import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
function Header() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode")
    if (storedMode === "true") {
      setDarkMode(true)
      document.body.classList.add("dark")
    }
  }, [])
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
    document.body.classList.toggle("dark")
    localStorage.setItem("darkMode", !darkMode)
  }
  return (
    <header className="header">
      <h1>Task Tracker</h1>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Home
        </NavLink>

        <NavLink to="/stats" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Stats
        </NavLink>
      </nav>

      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  )
}
export default Header