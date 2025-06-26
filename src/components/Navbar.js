import { Link } from "react-router"

function Navbar() {
   const links = [
      { name: "Home", to: "/" },
      { name: "Experience", to: "/experience" },
      { name: "Projects", to: "/project" }
   ]

   return (
      <div className="flex justify-between items-center mb-5">
         <div className="text-2xl">
            <Link to="/">RoyC</Link>
         </div>
         <ul className="flex">
            {links.map((link, index) => (
               <li key={index}>
                  <Link to={link.to} className="px-4 py-2 rounded-full hover:bg-neutral-100" >{link.name}</Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Navbar