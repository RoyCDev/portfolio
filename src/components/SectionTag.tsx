interface SectionTagProps {
  children: React.ReactNode,
  side: "left" | "right",
  className?: string
}

function SectionTag({ children, side, className }: SectionTagProps) {
  return (
    <p className={`bg-accent text-base-100 w-fit text-2xl h-8 pt-0.5 px-9 sm:text-3xl sm:h-9.5 sm:px-12 sm:pt-1 lg:text-4xl lg:h-10.5 ${className} ${side === "left" ?
      "rounded-r-full -ml-6 lg:pr-15" :
      "rounded-l-full -mr-6 lg:pl-15"}`
    }>
      {children}
    </p>
  )
}

export default SectionTag