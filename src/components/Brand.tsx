import clsx from "clsx"

const Brand = () => {
  const square = "dark:bg-white size-12.5 lg:size-17.5 flex justify-center items-center pt-2.5 lg:pt-4"

  return (
    <div className="text-5xl lg:text-7xl flex gap-x-1.5 text-base">
      <div className={clsx(square, "bg-[#37474F]")}>R</div>
      <div className={clsx(square, "bg-[#889DA8]")}>O</div>
      <div className={clsx(square, "bg-[#162242]")}>Y</div>
    </div>
  )
}

export default Brand