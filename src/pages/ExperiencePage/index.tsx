import jobs from "../../assets/data/experience"
import { FaLocationDot } from "react-icons/fa6";
import Avatar from "../../components/Avatar"
import InfoItem from "../../components/InfoItem";

function ExperiencePage() {
  return (
    <ul className="mt-10 lg:mt-15">
      {jobs.map((job, i) => (
        <li key={i} className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-3 md:flex md:items-start lg:gap-6">
          <div className="divider divider-accent divider-start divider-horizontal before:w-0.25! after:w-0.25! gap-0! row-span-2 md:order-2">
            <Avatar src={job.logo} alt={job.company} className="w-10 lg:w-12.5" />
          </div>
          <div className="md:min-w-38 lg:min-w-46 md:text-end md:order-1">
            <p className="text-accent text-sm lg:text-lg">{job.start} - {job.end}</p>
            <p className="leading-6 mt-1 text-xl lg:text-2xl">{job.title}</p>
            <div className="flex items-center gap-x-1 w-fit bg-primary px-2 mt-6 -mb-2 text-sm lg:text-base md:ml-auto">
              <FaLocationDot />
              <p className="mt-0.5">{job.location}</p>
            </div>
          </div>
          <div className={i !== jobs.length - 1 ? "pb-10 md:order-3 lg:pb-20 " : "md:order-3"}>
            <p className="text-2xl md:text-3xl lg:text-4xl">{job.company}</p>
            {job.description && <p className="font-kumbh mt-5 sm:text-lg lg:text-xl">{job.description}</p>}
            <p className="mt-5 mb-3 text-lg sm:text-xl lg:text-2xl">Accomplishments:</p>
            <ul className="font-kumbh grid gap-3 lg:grid-cols-3 ">
              {job.responsibilities.map((responsibility, i) => (
                <InfoItem key={i + 1} info={responsibility} number={i + 1} />
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ExperiencePage