import { NavLink } from "react-router"
import Brand from "./Brand"
import ThemeToggler from "./ThemeToggler"
import SectionTag from "./SectionTag"
import ContactLinks from "./ContactLinks"

interface HeaderProps {
  className?: string
}

function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <div className="flex justify-between">
        <Brand />
        <section>
          <SectionTag right>Contact Me</SectionTag>
          <ContactLinks />
        </section>
      </div>

      <div className="flex text-2xl gap-x-5 items-center -mt-1">
        <nav>
          <ul className="flex gap-x-5">
            <li className="hover:opacity-75 hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:opacity-75 hover:underline">
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li className="hover:opacity-75 hover:underline">
              <NavLink to="/project">Projects</NavLink>
            </li>
          </ul>
        </nav >
        <ThemeToggler />
        <hr className="flex-1" />
      </div >
    </header >

  )
}

export default Header