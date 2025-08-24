import { bio } from "../data.ts"
import Avatar from "../components/Avatar.tsx";
import SectionTag from "../components/SectionTag.tsx"
import { FcNightPortrait } from "react-icons/fc";

function HomePage() {
  return (
    <main className="flex gap-10 mt-5">
      {/* left panel */}
      <div className="flex-1">
        <section className="bg-primary p-12.5">
          <div className="flex items-center gap-3">
            <Avatar src="/profile.png" className="w-10" />
            <p className="text-4xl mt-2">Hello, I'm</p>
          </div>
          <div className="flex justify-around items-center">
            <p className="font-playpen text-7xl">Roy Cheung</p>
            <FcNightPortrait size={335} />
          </div>
          <p className="font-kumbh text-3xl">{bio.headline}</p>
        </section>

        <SectionTag side="left" className="mt-12.5 mb-10">About Me</SectionTag>
        <section className="font-kumbh text-2xl">
          <p>{bio.introduction}</p>
          <div className="flex gap-5 mt-10">
            {bio.facts.map((fact, i) => (
              <div key={i} className="bg-primary px-7 py-5">
                <p className="text-xl">{fact}</p>
                <p className="bg-secondary text-base-100 w-fit -mt-1 ml-auto px-3">Fact {i + 1}</p>
              </div>)
            )}
          </div>
        </section>
      </div>

      {/* right panel */}
      <div className="w-75">
        <div className="bg-secondary size-75" />
        <div className="bg-secondary mt-5 h-10" />
      </div>
    </main>
  )
}

export default HomePage