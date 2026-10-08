import jobs from "../assets/data/experience"
import { FaLocationDot } from "react-icons/fa6";

function ExperiencePage() {
  return (
    <main>
      {jobs.map(job => (
        <article className="grid grid-cols-[190px_44px_1fr] gap-5">
          <section className="text-right">
            <p>{job.start} - {job.end}</p>
            <p className="text-2xl leading-6 mt-2.5">{job.title}</p>
            <p className="flex gap-1 w-fit bg-secondary mt-5 ml-auto pt-0.5 px-3">
              <FaLocationDot className="mt-0.5" />{job.location}
            </p>
          </section>
          <section className="relative flex justify-center">
            <div className="w-px h-full border"></div>
            <img src={job.logo} className="absolute size-11 rounded-full" />
          </section>
          <section className="pb-16">
            <h2 className="text-4xl">{job.company}</h2>
            <p className="font-kumbh text-xl mt-5">{job.description}</p>
            <p className="text-2xl mt-11.5">Responsibilities:</p>
            <ol className="font-kumbh text-lg mt-2">
              {job.responsibilities.map((res, index) => (
                <li>
                  {index + 1}. {res}
                </li>)
              )}
            </ol>
          </section>
        </article>
      ))}
    </main>
  )
}

export default ExperiencePage