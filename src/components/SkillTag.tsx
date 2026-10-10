import type { Technology } from "../assets/data/skillIcons";
import skillIcons from "../assets/data/skillIcons"
import clsx from "clsx";

interface SkillTagProps {
  skill: Technology,
  homePage?: boolean,
  projectPage?: boolean
}

function SkillTag({ skill, homePage, projectPage }: SkillTagProps) {
  const Icon = skillIcons[skill];

  return (
    <li className={clsx("flex gap-x-2 items-center rounded px-2",
      homePage && "bg-primary dark:bg-accent dark:text-primary",
      projectPage && "bg-primary"
    )}>
      <Icon />
      <span className="mt-0.5">{skill}</span>
    </li>
  )
}

export default SkillTag;