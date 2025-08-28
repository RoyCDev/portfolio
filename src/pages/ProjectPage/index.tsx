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
      <div className="flex items-start gap-10">
        <section className="flex-1 bg-primary p-12.5 relative">
          <div className="flex items-center gap-3">
            <SiLivejournal size={40} />
            <p className="text-4xl mt-2">{featuredProject.name}</p>
          </div>

          <div className="absolute top-10 right-10">
            <p className="text-4xl bg-base-100 w-fit ml-auto mb-2 pt-0.5 px-5">{featuredProject.year}</p>
            <ul className="flex gap-2 text-3xl text-accent">
              {featuredProject.tools.map(tool => {
                const Icon = skillIcons[tool]
                return (
                  <li key={tool} className="border-1 p-1 rounded tooltip tooltip-bottom" data-tip={tool}>
                    <Icon />
                  </li>)
              })}
            </ul>
          </div>

          <div className="flex justify-around items-center">
            <img src={featuredProject.image} alt={featuredProject.name} className="size-84" />
          </div>
          <p className="font-kumbh text-3xl">{featuredProject.description}</p>
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