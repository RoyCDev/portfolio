import projects from "../assets/data/projects"
import skillIcons from "../assets/data/skillIcons"
import SectionTag from "../components/SectionTag"
import SkillTag from "../components/SkillTag";
import { SiLivejournal } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import clsx from "clsx";

function ProjectPage() {
  const [featuredProject, ...otherProjects] = projects;
  const webCount = projects.filter(proj => proj.category === "Web").length;
  const uiCount = projects.length - webCount;

  const category = "text-xl w-fit px-3 pt-0.5"
  const count = "font-playpen font-semibold text-xl lg:text-3xl"
  const uiWidth = (uiCount / projects.length) * 100

  return (
    <main className="grid lg:grid-cols-[1fr_284px] lg:[grid-template-areas:'b_c'_'b_a'_'b_.'_'d_d'] gap-5 lg:gap-x-11.5 xl:mb-5">
      {/* project category & count */}
      <section className="lg:[grid-area:a] lg:py-4 bg-secondary">
        <div className="flex justify-around my-1 lg:mt-0">
          <div className="flex lg:flex-col gap-x-2">
            <p className={clsx(category, "text-base-100 bg-base-content dark:bg-base-100 dark:text-base-content")}>Web</p>
            <span className={clsx(count, "dark:text-base-100")}>{webCount}</span>
          </div>
          <div className="text-right flex lg:flex-col gap-x-2">
            <p className={clsx(category, "bg-base-100 text-base-content dark:bg-base-content dark:text-base-100")}>UI only</p>
            <span className={clsx(count, "text-base-100 dark:text-base-content")}>{uiCount}</span>
          </div>
        </div>
        <div
          style={{ '--before-width': `${uiWidth}%` } as React.CSSProperties}
          className={`hidden lg:block relative w-3/4 h-2.5 mx-auto rounded bg-base-content dark:bg-base-100 before:absolute before:h-full before:w-(--before-width) before:top-0 before:right-0 before:bg-base-100 dark:before:bg-base-content before:rounded-r`} />
      </section>

      {/* featured project */}
      <article className="lg:[grid-area:b] relative bg-primary h-74 sm:h-84 lg:h-109 xl:h-124 flex flex-col justify-between p-6 lg:p-10 xl:p-14">
        <a target="_blank" href={featuredProject.link}
          className="flex space-x-1 text-2xl lg:text-3xl xl:text-4xl hover:opacity-75">
          <SiLivejournal />
          <span className="ml-1 lg:mt-0.5">{featuredProject.name}</span>
          <TbExternalLink className="text-xl" />
        </a>

        <div className="mt-auto mb-3 lg:absolute lg:text-right top-1/15 right-1/25">
          <span className="text-xl lg:text-3xl xl:text-4xl pt-1.25 pb-px px-4 text-base-100 bg-base-content dark:text-base-content dark:bg-base-100">{featuredProject.year}</span>
          <ul className="flex gap-1 mt-1 xl:mt-2 text-3xl lg:text-4xl">
            {featuredProject.tools.map(tool => {
              const SkillIcon = skillIcons[tool];
              return (<SkillIcon className="p-1 border rounded" />)
            })}
          </ul>
        </div>

        <img src={featuredProject.image} className="hidden sm:block sm:absolute sm:top-1/9 sm:right-6 lg:left-1/2 lg:-translate-x-1/2 size-38 sm:size-70 xl:size-80" />
        <p className="font-kumbh text-lg sm:w-1/2 lg:w-auto lg:text-2xl xl:text-3xl">{featuredProject.description}</p>
      </article>

      <section className="lg:[grid-area:c] hidden lg:h-67.5 lg:block bg-secondary"></section>

      {/* more projects */}
      <section className="lg:[grid-area:d] mt-5">
        <SectionTag left>More Projects</SectionTag>
        {
          otherProjects.map((proj, index) => (
            <article key={index} className="grid md:[grid-template-areas:'a_b'_'c_c'] lg:[grid-template-areas:'c_a_b'] md:grid-cols-[1fr_2fr] lg:grid-cols-[144px_1fr_2fr] gap-5 mt-10">
              {/* image */}
              <section className="md:[grid-area:a] relative">
                <img src={proj.image} />
                <span className="absolute top-2 left-2 px-3 pt-0.5 text-xl text-base-100 bg-base-content dark:text-base-content dark:bg-base-100">{proj.year}</span>
                <span className="absolute top-10 left-2 px-3 pt-0.5 text-xl bg-secondary text-base-content dark:text-base-100">{proj.category}</span>
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
                {proj.tools.map(tool => (
                  <SkillTag key={tool} skill={tool} projectPage />
                ))}
              </ul>
            </article>
          ))
        }
      </section>
    </main >
  )
}

export default ProjectPage