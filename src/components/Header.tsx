import { NavLink } from "react-router"
import Brand from "./Brand"
import ContactLinks from "./ContactLinks"

function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <NavLink to="/"><Brand /></NavLink>
        <section>
          <p className="bg-accent text-base-100 text-4xl rounded-l-full h-10.5 pt-1 px-15 -mr-15">Contact Me</p>
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