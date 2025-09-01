import ProjectItemTag from "./ProjectItemTag.tsx";
import SkillItem from "../../components/SkillItem.tsx";
import type { Project } from "../../assets/data/projects.ts"

interface ProjectItemProps {
  project: Project
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="flex flex-wrap gap-5 md:gap-3 md:flex-nowrap lg:gap-5">
      <div className="relative w-full md:order-2 md:w-60 lg:w-80">
        <img src={project.image} alt={project.name} className="" />
        <ProjectItemTag className="bg-base-100 top-2 sm:top-4 md:top-1.5 lg:top-2">{project.year}</ProjectItemTag>
        <ProjectItemTag className="bg-secondary text-base-100 top-11 sm:top-14 md:top-9 lg:top-11">{project.category}</ProjectItemTag>
      </div>
      <div className="space-y-1 flex-1 -mt-1 md:order-3 md:ml-2">
        <p className="text-xl sm:text-2xl lg:text-3xl">{project.name}</p>
        <p className="font-kumbh sm:text-lg lg:text-xl">{project.description}</p>
      </div>
      <ul className="space-y-2 text-sm min-w-30 md:order-1 lg:text-base lg:min-w-35 ">
        {project.tools.map(tool =>
          <SkillItem key={tool} skill={tool} location="ProjectPage" />)}
      </ul>
    </article>
  )
}

export default ProjectItem