import bio from "../assets/data/bios"
import skillIcons from "../assets/data/skillIcons"
import SectionTag from "../components/SectionTag"
import { FcPortraitMode, FcNightPortrait } from "react-icons/fc"
import clsx from "clsx"

function HomePage() {
  const portrait = "hidden sm:block absolute top-8 right-4 md:right-6 sm:size-74 xl:size-84 transition-transform duration-300"

  return (
    <main className="grid lg:[grid-template-areas:'b_a'_'b_d'_'c_d'_'._d'] lg:grid-cols-[1fr_284px] gap-5 lg:gap-11.5">
      {/* weather */}
      <section className="lg:[grid-area:a] h-5 lg:h-67.5 bg-secondary" />

      {/* headline */}
      <section className="lg:[grid-area:b] relative bg-primary h-74 sm:h-84 lg:h-109 xl:h-124 flex flex-col justify-around px-6 lg:px-10 xl:px-14">
        <div className="flex gap-x-3">
          <img src="profile.png" className="size-7 lg:size-8 xl:size-10 rounded-full" />
          <p className="text-2xl lg:text-3xl xl:text-4xl mt-0.5 xl:mt-1">Hello, I'm</p>
        </div>
        <p className="font-playpen text-4xl lg:text-5xl xl:text-6xl lg:w-3/5">Roy Cheung</p>
        <FcPortraitMode className={clsx(portrait, "dark:opacity-0 dark:translate-y-5")} />
        <FcNightPortrait className={clsx(portrait, "opacity-0 dark:opacity-100 translate-y-5 dark:translate-y-0")} />
        <p className="font-kumbh text-lg sm:w-1/2 lg:w-auto lg:text-2xl xl:text-3xl">{bio.headline}</p>
      </section>

      {/* about me */}
      <section className="lg:[grid-area:c] xl:mt-6.5">
        <SectionTag left>About Me</SectionTag>
        <p className="font-kumbh text-lg md:text-xl xl:text-2xl mt-4 lg:mt-6">{bio.introduction}</p>
        <ul className="font-kumbh grid sm:grid-cols-2 gap-5 md:gap-7 mt-5 lg:mt-7.5">
          {bio.facts.map((fact, index) => (
            <li key={index} className="bg-primary xl:text-lg px-5 py-4">
              {fact}
              <span className="font-josefin float-right text-lg xl:text-xl bg-secondary  dark:text-base px-3 pt-0.5 mt-2">
                Fact {index + 1}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* skills */}
      <section className="lg:[grid-area:d] bg-secondary px-5 py-6">
        <div className="flex gap-x-3">
          <img src="github.png" className="size-8 rounded-full" />
          <p className="text-2xl mt-1">RoyCDev</p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-1.5 pt-5">
          {bio.skills.map(skill => {
            const SkillIcon = skillIcons[skill]
            return (
              <li key={skill} className="flex gap-x-2 items-center bg-primary dark:bg-accent dark:text-primary rounded px-2">
                <SkillIcon />
                <span className="mt-0.5">{skill}</span>
              </li>
            )
          })}
        </ul>
        <img src="vector.svg" className="block mx-auto pt-8.5" />
      </section>
    </main>
  )
}

export default HomePage