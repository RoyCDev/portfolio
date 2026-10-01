import { NavLink } from "react-router"
import Brand from "./Brand"
import ThemeToggler from "./ThemeToggler"
import SectionTag from "./SectionTag"
import ContactLinks from "./ContactLinks"

function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <Brand />
        <section>
          <SectionTag>Contact Me</SectionTag>
          <ContactLinks />
        </section>
      </div>

      <div className="flex text-2xl gap-x-5 items-center">
        <nav>
          <ul className="flex gap-x-5">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/project">Projects</NavLink></li>
          </ul>
        </nav >
        <ThemeToggler />
        <hr className="flex-1" />
      </div >
    </header >

  )
}

export default Header