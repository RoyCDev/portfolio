interface BrandProps {
  location: "header" | "footer"
}

function Brand({ location }: BrandProps) {
  return (
    <div className={`flex gap-x-1 text-center ${location === "header" ?
      "text-7xl text-base-100" : "text-5xl text-neutral"
      }`}>
      <div className={`bg-white ${location === "header" ? "size-17.5 pt-2" : "size-12.5 pt-1.5"}`}>R</div>
      <div className={`bg-white ${location === "header" ? "size-17.5 pt-2" : "size-12.5 pt-1.5"}`}>O</div>
      <div className={`bg-white ${location === "header" ? "size-17.5 pt-2" : "size-12.5 pt-1.5"}`}>Y</div>
    </div>
  )
}

export default Brand