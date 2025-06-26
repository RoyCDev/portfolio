import projects from "../data/projects"
import { Link } from "react-router"
import { MdKeyboardArrowLeft } from "react-icons/md";
import techIcons from "../util/techIcons";
import { FaRegCalendar } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectPage() {
   return (
      <div>
         <Link to="/" className="flex items-center gap-2 text-sm">
            <MdKeyboardArrowLeft /> Back to Portfolio
         </Link>
         <h1 className="text-xl mt-8">Projects</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {projects.map((proj, index) =>
               <section key={index} className="text-sm border-[1px] rounded-xl p-5 transition-all duration-300 hover:bg-neutral-50 flex flex-col">
                  <div className="bg-neutral-100 rounded px-2 py-0.5 w-fit mb-3">{proj.tools[0]}</div>
                  {proj.video ?
                     <iframe width="100%" className="aspect-video rounded-lg" src={proj.video} title={proj} /> :
                     <img src={proj.image} alt="project" className="aspect-video rounded-lg" />
                  }
                  <h2 className="text-lg font-semibold mt-4 flex items-center gap-1">
                     {proj.name}
                     <a href={proj.link} target="_blank" className="cursor-pointer"><FaExternalLinkAlt size={12} /></a>
                  </h2>
                  <p className="text-xs flex items-center gap-1">
                     <FaRegCalendar />{proj.year}
                  </p>
                  <p className="mt-3 mb-3">{proj.desc}</p>
                  <ul className="flex flex-wrap gap-2 mt-auto">
                     {proj.tools.map((name, index) =>
                        <li key={index} className="bg-neutral-100 rounded p-2 group relative">
                           {techIcons[name]}
                           <div className="text-sm text-white bg-black -mt-12 rounded px-2 py-0.5 shadow-lg invisible group-hover:visible absolute left-1/2 -translate-x-1/2 z-[1] whitespace-nowrap">{name}</div>
                        </li>)}
                  </ul>
               </section>
            )}
         </div>
      </div>
   )
}

export default ProjectPage