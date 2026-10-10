import projects from "../assets/data/projects"
import skillIcons from "../assets/data/skillIcons"
import SectionTag from "../components/SectionTag"
import { TbExternalLink } from "react-icons/tb";


function ProjectPage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <main>
      <SectionTag left>More Projects</SectionTag>
      {otherProjects.map((proj, index) => (
        <article key={index} className="grid md:[grid-template-areas:'a_b'_'c_c'] lg:[grid-template-areas:'c_a_b'] md:grid-cols-[1fr_2fr] lg:grid-cols-[144px_1fr_2fr] gap-5 mt-10.5">
          {/* image */}
          <section className="md:[grid-area:a] relative">
            <img src={proj.image} />
            <span className="absolute top-2 left-2 px-2 pt-0.5 text-xl text-base-100 bg-base-content dark:text-base-content dark:bg-base-100">{proj.year}</span>
            <span className="absolute top-10 left-2 px-2 pt-0.5 text-xl bg-secondary text-base-content dark:text-base-100">{proj.category}</span>
          </section>

          {/* description */}
          <section className="md:[grid-area:b]">
            <a target="_blank" href={proj.link}
              className="flex space-x-1 text-2xl xl:text-3xl hover:opacity-75">
              <span>{proj.name}</span>
              <TbExternalLink className="text-base" />
            </a>
            <p className="font-kumbh md:text-lg xl:text-xl mt-1">{proj.description}</p>
          </section>

          {/* tech stack */}
          <ul className="md:[grid-area:c] flex flex-wrap gap-2 lg:flex-col">
            {proj.tools.map(tool => {
              const SkillIcon = skillIcons[tool];
              return (
                <li key={tool} className="flex gap-x-2 items-center rounded px-2 bg-primary">
                  <SkillIcon />
                  <span className="mt-0.5">{tool}</span>
                </li>
              )
            })}
          </ul>
        </article>
      ))}
    </main>
  )
}

export default ProjectPage