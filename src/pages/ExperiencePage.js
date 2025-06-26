import jobs from "../data/experience"
import { Link } from "react-router"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";

function ExperiencePage() {
   return (
      <div>
         <Link to="/" className="flex items-center gap-2 text-sm">
            <MdKeyboardArrowLeft /> Back to Portfolio
         </Link>
         <h1 className="text-xl mt-8">Experience</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {jobs.map((job, index) =>
               <section key={index} className="text-sm border-[1px] rounded-xl p-5 hover:-translate-y-2 transition-transform duration-300 hover:bg-neutral-50">
                  <div className="flex items-center gap-4">
                     <img src={job.companyLogo} className="w-20 h-20 rounded-xl " />
                     <div>
                        <h2 className="text-lg font-semibold">{job.title}</h2>
                        <p className="text-xs flex items-center gap-1">
                           <FaRegCalendar /> {job.start} - {job.end}
                        </p>
                        <p className="mt-3">{job.company}</p>
                        <p>{job.location}</p>
                     </div>
                  </div>

                  <p className="mt-6 text-base flex items-center gap-2">
                     <FaTasks />Responsibilities
                  </p>
                  <ul className="list-disc pl-8 mt-2 space-y-1">
                     {job.responsibilities.map((res, index) => <li key={index}>{res}</li>)}
                  </ul>
               </section>
            )}
         </div>
      </div>
   )
}

export default ExperiencePage