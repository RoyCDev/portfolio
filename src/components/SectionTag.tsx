interface SectionTagProps {
  children: React.ReactNode,
  side: "left" | "right",
  className?: string
}

function SectionTag({ children, side, className }: SectionTagProps) {
  return (
    <p className={`bg-accent text-base-100 text-4xl w-fit h-10.5 pt-1 px-15 ${className} ${side === "left" ?
      "rounded-r-full -ml-15" :
      "rounded-l-full -mr-15"}`
    }>
      {children}
    </p>
  )
}

export default SectionTag