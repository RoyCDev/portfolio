import clsx from "clsx"

interface SectionTagProps {
  children: React.ReactNode,
  left?: boolean,
  right?: boolean
}

function SectionTag({ children, left, right }: SectionTagProps) {
  return (
    <span className={clsx("inline-block text-4xl bg-accent text-base px-15 pt-1.5 mb-3",
      right && "-mr-15 rounded-l-full",
      left && "-ml-15 rounded-r-full"
    )}>
      {children}
    </span>
  )
}

export default SectionTag