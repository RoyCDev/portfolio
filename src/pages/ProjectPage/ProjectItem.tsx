import SkillItem from "../../components/SkillItem.tsx";
import type { Project } from "../../assets/data/projects.ts"

interface ProjectItemProps {
  project: Project
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="flex gap-x-5">
      <ul className="space-y-2 min-w-35">
        {project.tools.map(tool =>
          <SkillItem key={tool} skill={tool} location="ProjectPage" />)}
      </ul>
      <div className="relative">
        <img src={project.image} alt={project.name} className="min-w-80 h-50" />
        <p className="absolute top-2 left-2 text-2xl bg-base-100 px-3 shadow shadow-primary">{project.year}</p>
        <p className="absolute top-11 left-2 text-2xl bg-secondary text-base-100 px-3 pt-0.5 h-8">{project.category}</p>
      </div>
      <div className="space-y-2 ml-3">
        <p className="text-3xl">{project.name}</p>
        <p className="text-xl font-kumbh">{project.description}</p>
      </div>
    </article>
  )
}

export default ProjectItem