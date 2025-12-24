import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import Header from "./components/Header"
function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
        </Routes>
    </>
  )
}
export default App
