import bio from "../../assets/data/bio.ts"
import Avatar from "../../components/Avatar.tsx";
import SectionTag from "../../components/SectionTag.tsx"
import FactItem from "./FactItem.tsx";
import SkillItem from "../../components/SkillItem.tsx";
import { FcNightPortrait } from "react-icons/fc";

function HomePage() {
  return (
    <main className="flex gap-10 mt-5">
      {/* left panel */}
      <div className="flex-1">
        <section className="bg-primary p-12.5">
          <div className="flex items-center gap-3">
            <Avatar src="/profile.png" alt="profile image" className="w-10" />
            <p className="text-4xl mt-2">Hello, I'm</p>
          </div>
          <div className="flex justify-around items-center">
            <p className="font-playpen text-7xl">Roy Cheung</p>
            <FcNightPortrait size={336} />
          </div>
          <p className="font-kumbh text-3xl">{bio.headline}</p>
        </section>

        <SectionTag side="left" className="mt-12.5 mb-10">About Me</SectionTag>
        <section className="font-kumbh text-2xl">
          <p>{bio.introduction}</p>
          <ul className="flex gap-5 mt-10">
            {bio.facts.map((fact, i) =>
              <FactItem key={i + 1} fact={fact} number={i + 1}></FactItem>)}
          </ul>
        </section>
      </div>

      {/* right panel */}
      <div className="w-75 space-y-5">
        <section className="bg-secondary size-75" />

        <section className="bg-secondary p-5">
          <div className="flex gap-5 items-start mt-2">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Avatar src="/github.png" alt="github image" className="w-8" />
                <p className="text-2xl mt-1">RoyCDev</p>
              </div>
              <ul className="space-y-2.5 mt-5">
                {bio.skills.map((skill) =>
                  <SkillItem key={skill} skill={skill} location="HomePage" />)}
              </ul>
            </div>
            <p className="[writing-mode:sideways-lr] text-4xl bg-primary w-9 px-2">Tech Stack</p>
          </div>
          <img src="/vector.svg" alt="man developing website on desk)" className="mt-8 mb-6" />
        </section>
      </div >
    </main >
  )
}

export default HomePage