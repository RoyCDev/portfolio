import clsx from "clsx"

interface SectionTagProps {
  children: React.ReactNode,
  left?: boolean,
  right?: boolean,
  className?: string
}

function SectionTag({ children, left, right, className }: SectionTagProps) {
  return (
    <div className={clsx("w-fit text-2xl lg:text-3xl bg-accent text-base-100 px-15 pt-1.5 lg:mb-3",
      right && "-mr-10 md:-mr-15 rounded-l-full",
      left && "-ml-10 md:-ml-15 rounded-r-full",
      className
    )}>
      {children}
    </div>
  )
}

export default SectionTag