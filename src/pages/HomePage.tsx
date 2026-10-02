import SectionTag from "../components/SectionTag"
import { FcNightPortrait } from "react-icons/fc"
import bio from "../assets/data/bios"
import skillIcons from "../assets/data/skillIcons"

function HomePage() {
  return (
    <main className="grid grid-cols-[1fr_284px] gap-x-11.5">
      <section>
        <div className="relative bg-primary h-124 flex flex-col justify-around px-14">
          <div className="flex gap-x-3">
            <img src="profile.png" className="size-10 rounded-full" />
            <p className="text-4xl mt-1">Hello, I'm</p>
          </div>
          <p className="font-playpen text-6xl w-1/2">Roy Cheung</p>
          <FcNightPortrait className="absolute top-8 right-14 size-84" />
          <p className="font-kumbh text-3xl">{bio.headline}</p>
        </div>

        <div className="mt-10">
          <SectionTag left>About Me</SectionTag>
          <p className="font-kumbh text-2xl mt-6">{bio.introduction}</p>
          <ul className="font-kumbh grid grid-cols-2 gap-x-7 mt-7.5">
            {bio.facts.map((fact, index) => (
              <li className="bg-primary text-lg px-5 py-4">
                {fact}
                <span className="font-josefin float-right text-xl bg-secondary text-base px-3 pt-0.5 mt-2">
                  Fact {index + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="h-67.5 bg-secondary"></div>
        <div className="bg-secondary mt-3.5 px-5 py-6">
          <div className="flex gap-x-3">
            <img src="github.png" className="size-8 rounded-full" />
            <p className="text-2xl mt-1">RoyCDev</p>
          </div>
          <ul className="space-y-1.5 pt-5">
            {bio.skills.map(skill => {
              const SkillIcon = skillIcons[skill]
              return (
                <li className="flex gap-x-2 items-center bg-accent text-primary rounded">
                  <SkillIcon /> {skill}
                </li>
              )
            })}
          </ul>
          <img src="vector.svg" className="pt-8.5" />
        </div>
      </section>
    </main>
  )
}

export default HomePage