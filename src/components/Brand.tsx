interface BrandProps {
  location: "header" | "footer"
}

function Brand({ location }: BrandProps) {
  const brandBoxClasses = location === "header" ?
    "size-12.5 pt-1.5 md:size-15 lg:size-17.5" :
    "size-12.5 pt-1.5"

  return (
    <div className={`flex gap-x-1 text-center ${location === "header" ?
      "text-base-100 text-5xl md:text-6xl lg:text-7xl mb-3" :
      "text-5xl text-neutral"
      }`}>
      <div className={`bg-white ${brandBoxClasses}`}>R</div>
      <div className={`bg-white ${brandBoxClasses}`}>O</div>
      <div className={`bg-white ${brandBoxClasses}`}>Y</div>
    </div>
  )
}

export default Brand