interface ProjectItemTagProps {
  className: string,
  children: React.ReactNode,
}

function ProjectItemTag({ className, children }: ProjectItemTagProps) {
  return (
    <p className={`absolute left-2 text-xl sm:left-4 sm:text-2xl md:left-1.5 md:text-base lg:text-xl px-3 pt-0.5 shadow shadow-primary ${className}`}>{children}</p>
  )
}

export default ProjectItemTag