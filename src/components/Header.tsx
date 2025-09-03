import { NavLink } from "react-router"
import Brand from "./Brand"
import SectionTag from "./SectionTag"
import ContactLinks from "./ContactLinks"

function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <NavLink to="/"><Brand location="header" /></NavLink>
        <section className="hidden md:block">
          <SectionTag side="right">Contact Me</SectionTag>
          <ContactLinks location="header" />
        </section>
      </div>

      <nav className="flex items-center text-lg gap-x-3 md:text-xl md:gap-x-3.5 lg:text-2xl lg:gap-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <div className="divider divider-accent flex-1 my-2 before:h-0.25 after:h-0.25" />
      </nav>
    </header>
  )
}

export default Header