import projects from "../../assets/data/projects.ts"
import { SiLivejournal } from "react-icons/si";
import skillIcons from "../../assets/data/skillIcons.ts";
import SectionTag from "../../components/SectionTag.tsx";
import ProjectItem from "./ProjectItem.tsx";
import FolderIcon from "./FolderIcon.tsx";
import { FaCircle } from "react-icons/fa";

function ProjectPage() {
  const [featuredProject, ...otherProjects] = projects;
  const webCount = projects.filter(proj => proj.category === "Web").length
  const uiCount = projects.length - webCount;

  return (
    <main className="mt-5">
      {/* top half */}
      <div className="md:flex md:items-start md:gap-6 xl:gap-10">
        <section className="relative bg-primary p-7 sm:p-9 lg:p-12.5">
          <div className="relative flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl lg:gap-3">
            <SiLivejournal />
            <p className="mt-2">{featuredProject.name}</p>
            <p className="absolute bg-base-100 pt-0.5 -top-1.5 -right-1.5 px-2 lg:px-5">{featuredProject.year}</p>
          </div>
          <div className="flex justify-around items-center">
            <img src={featuredProject.image} alt={featuredProject.name} className="max-w-54 sm:max-w-64 lg:max-w-none" />
          </div>

          <div className="font-kumbh text-lg sm:text-xl lg:text-3xl">
            <p className="mb-3 lg:mb-0">{featuredProject.description}</p>
            <ul className="flex gap-2 text-accent lg:absolute lg:pr-12.5 lg:top-24 lg:-right-1.5">
              {featuredProject.tools.map(tool => {
                const Icon = skillIcons[tool]
                return (
                  <li key={tool} className="border-1 p-1 rounded tooltip tooltip-bottom" data-tip={tool}>
                    <Icon />
                  </li>)
              })}
            </ul>
          </div>
        </section>

        <div className="w-75 space-y-5">
          <section className="size-75 bg-secondary" />

          <section className="bg-secondary p-5 pb-4">
            <div className="flex items-start gap-1.5">
              <div className="bg-white w-fit rounded-full p-2">
                <FolderIcon className="text-primary text-3xl" />
              </div>
              <div>
                <p className="text-lg bg-primary px-1 pt-0.5 leading-6">Projects</p>
                <p className="flex items-center gap-1">
                  <FaCircle className="text-[10px] -mt-0.5 text-primary" /> {projects.length}
                </p>
              </div>
            </div>
            <div className="mt-10 mx-3">
              <div className="flex justify-between">
                <div>
                  <p className="bg-primary text-xl h-7 px-1 pt-0.5">Web</p>
                  <p className="font-playpen text-3xl font-semibold text-primary">{webCount}</p>
                </div>
                <div className="text-end">
                  <p className="text-xl bg-accent text-primary h-7 px-1 ">UI Only</p>
                  <p className="font-playpen text-3xl font-semibold text-accent">{uiCount}</p>
                </div>
              </div>
              <progress className="progress progress-primary bg-accent h-3" value={webCount / projects.length} max="1" />
            </div>
          </section>
        </div>
      </div>

      {/* bottom half */}
      <SectionTag side="left" className="mt-12.5 mb-10">More Projects</SectionTag>
      <section className="space-y-10">
        {otherProjects.map((project, i) =>
          <ProjectItem key={i} project={project} />
        )}
      </section>
    </main>
  )
}

export default ProjectPage