import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectPage from "./pages/ProjectPage"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="experience" element={<ExperiencePage />}></Route>
      <Route path="project" element={<ProjectPage />}></Route>
    </Routes>
  )
}

export default App
