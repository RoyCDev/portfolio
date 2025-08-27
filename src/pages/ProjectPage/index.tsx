import projects from "../../assets/data/projects.ts"
import { SiLivejournal } from "react-icons/si";
import SectionTag from "../../components/SectionTag.tsx";
import ProjectItem from "./ProjectItem.tsx";

function ProjectPage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <main className="mt-5">
      {/* top half */}
      <div className="flex items-start gap-10">
        <section className="flex-1 bg-primary p-12.5">
          <div className="flex items-center gap-3">
            <SiLivejournal size={40} />
            <p className="text-4xl mt-2">{featuredProject.name}</p>
          </div>
          <div className="flex justify-around items-center">
            <img src={featuredProject.image} alt={featuredProject.name} className="size-84" />
          </div>
          <p className="font-kumbh text-3xl">{featuredProject.description}</p>
        </section>
        <div className="w-75 space-y-5">
          <section className="size-75 bg-secondary" />
          <section className="w-75 h-45 bg-secondary" />
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