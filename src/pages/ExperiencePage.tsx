import jobs from "../assets/data/experience"
import { FaLocationDot } from "react-icons/fa6";

function ExperiencePage() {
  return (
    <main className="mt-7.5 lg:mt-12.5">
      {jobs.map(job => (
        <article className="grid [grid-template-areas:'a_b'_'a_c'] md:[grid-template-areas:'b_a_c'] md:grid-cols-[190px_auto_1fr] gap-x-3 gap-y-5 md:gap-5">
          {/* company logo */}
          <section className="[grid-area:a] relative md:flex justify-center
          before:absolute before:left-1/2 before:w-px before:h-full before:bg-base-content">
            <img src={job.logo} className="relative size-11 rounded-full" />
          </section>

          {/* job basic info */}
          <section className="[grid-area:b] md:text-right">
            <p className="text-sm lg:text-base">{job.start} - {job.end}</p>
            <p className="text-lg lg:text-2xl leading-6 mt-1 lg:mt-2.5">{job.title}</p>
            <p className="flex gap-1 w-fit bg-secondary my-2 lg:mt-5 md:ml-auto pt-0.5 px-3 text-sm lg:text-base">
              <FaLocationDot className="mt-0.5" />{job.location}
            </p>
          </section>

          {/* job duty */}
          <section className="[grid-area:c] pb-16">
            <h2 className="text-2xl lg:text-4xl mt-1">{job.company}</h2>
            <p className="font-kumbh text-lg lg:text-xl mt-5">{job.description}</p>
            <p className="text-xl lg:text-2xl mt-7.5 lg:mt-11.5">Responsibilities:</p>
            <ol className="font-kumbh lg:text-lg mt-2">
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