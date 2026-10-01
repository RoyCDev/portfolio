import { NavLink } from "react-router"
import ThemeToggler from "./ThemeToggler"

function Header() {
  return (
    <header>
      <div className="flex">
        <nav>
          <ul className="flex">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/project">Projects</NavLink></li>
          </ul>
        </nav>
        <ThemeToggler />
      </div>
    </header>

  )
}

export default Header