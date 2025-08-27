import skillIcons, { type Technology } from "../assets/data/skillIcons";

interface SkillItemProps {
  skill: Technology,
  location: "HomePage" | "ProjectPage"
}

function SkillItem({ skill, location }: SkillItemProps) {
  const Icon = skillIcons[skill];
  return (
    <li className={`flex gap-2 items-center px-3 whitespace-nowrap ${location === "HomePage" ?
      "bg-accent text-base-100 rounded-lg" :
      "bg-primary rounded"
      }`}>
      <Icon />
      <p className="mt-0.5 -mb-0.5">{skill}</p>
    </li>
  )
}

export default SkillItem