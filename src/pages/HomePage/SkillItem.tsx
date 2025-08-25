import { skillIcons, type Technology } from "../../data";

interface SkillItemProps {
  skill: Technology
}

function SkillItem({ skill }: SkillItemProps) {
  const Icon = skillIcons[skill];
  return (
    <li key={skill} className="flex gap-2 items-center bg-accent text-base-100 rounded-lg px-3">
      <Icon />
      <p className="mt-0.5 -mb-0.5">{skill}</p>
    </li>
  )
}

export default SkillItem