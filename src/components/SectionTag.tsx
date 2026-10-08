import clsx from "clsx"

interface SectionTagProps {
  children: React.ReactNode,
  left?: boolean,
  right?: boolean,
  className?: string
}

function SectionTag({ children, left, right, className }: SectionTagProps) {
  return (
    <div className={clsx("w-fit text-2xl lg:text-3xl xl:text-4xl bg-accent text-base px-15 pt-1.5 lg:mb-3",
      right && "-mr-15 rounded-l-full",
      left && "-ml-10 md:-ml-15 rounded-r-full",
      className
    )}>
      {children}
    </div>
  )
}

export default SectionTag