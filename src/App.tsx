import { Routes, Route } from "react-router"
import RootLayout from "./layout/RootLayout"
import HomePage from "./pages/HomePage"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectPage from "./pages/ProjectPage"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="experience" element={<ExperiencePage />}></Route>
        <Route path="project" element={<ProjectPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
