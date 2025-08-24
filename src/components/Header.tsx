import { NavLink } from "react-router"
import Brand from "./Brand"
import SectionTag from "./SectionTag"
import ContactLinks from "./ContactLinks"

function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <NavLink to="/"><Brand /></NavLink>
        <section>
          <SectionTag side="right">Contact Me</SectionTag>
          <ContactLinks className="flex justify-end gap-x-5 text-accent mt-5" />
        </section>
      </div>

      <nav className="flex items-center gap-x-5 text-2xl font-normal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <div className="divider divider-accent flex-1 my-2 before:h-0.25 after:h-0.25" />
      </nav>
    </header>
  )
}

export default Header