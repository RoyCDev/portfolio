import { NavLink } from "react-router"

function Header() {
  return (
    <div className="space-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/project">Project</NavLink>
    </div>
  )
}

export default Header