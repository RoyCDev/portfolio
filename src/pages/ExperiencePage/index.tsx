import jobs from "../../assets/data/experience"
import { FaLocationDot } from "react-icons/fa6";
import Avatar from "../../components/Avatar"
import InfoItem from "../../components/InfoItem";

function ExperiencePage() {
  return (
    <ul className="mt-15">
      {jobs.map((job, i) => (
        <li key={i} className="flex items-start gap-x-6">
          <div className="min-w-46 text-end">
            <p className="text-lg text-accent">{job.start} - {job.end}</p>
            <p className="text-2xl leading-6 mt-1">{job.title}</p>
            <div className="flex items-center gap-x-1 w-fit justify-self-end bg-primary px-2 mt-5">
              <FaLocationDot />
              <p className="mt-0.5">{job.location}</p>
            </div>
          </div>
          <div className="divider divider-accent divider-start divider-horizontal before:w-0.25! after:w-0.25! gap-0!">
            <Avatar src={job.logo} alt={job.company} className="w-12.5" />
          </div>
          <div className={i !== jobs.length - 1 ? "pb-20" : ""}>
            <p className="text-4xl">{job.company}</p>
            {job.description && <p className="font-kumbh text-xl mt-5">{job.description}</p>}
            <p className="text-2xl mt-5 mb-3">Accomplishments:</p>
            <ul className="font-kumbh grid grid-cols-3 gap-x-3">
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