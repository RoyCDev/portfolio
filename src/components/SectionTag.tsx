interface SectionTagProps {
  children: React.ReactNode,
}

function SectionTag({ children }: SectionTagProps) {
  return (
    <span className="bg-white px-9 text-4xl pt-[0.5%]">
      {children}
    </span>
  )
}

export default SectionTag