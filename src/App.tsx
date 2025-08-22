import { Routes, Route } from "react-router"
import RootLayout from "./RootLayout"
import HomePage from "./pages/HomePage"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectPage from "./pages/ProjectPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="project" element={<ProjectPage />} />
      </Route>
    </Routes>
  )
}

export default App