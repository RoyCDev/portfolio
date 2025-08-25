import type { IconType } from "react-icons";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiDaisyui, SiGit } from "react-icons/si";

type Technology = "HTML" | "CSS" | "TailwindCSS" | "JavaScript" | "TypeScript" | "React.js" | "DaisyUI" | "Git"
interface Bio {
  headline: string,
  introduction: string,
  facts: string[],
  skills: Technology[]
}

const bio: Bio = {
  headline: "Frontend Web Developer in the San Francisco Bay Area. Recent CS graduate @ SJSU.",
  introduction: "Hello! I'm an aspiring web developer passionate to build websites with clean & intuitive design. What I like about frontend is getting to witness how every little change brings the project closer to life. I strive for quality and continual improvement in my work.",
  facts: [
    "Scratch was my first programming language, and I made a typing game with it as my APCSP project.",
    "Aside from coding, I spend my free time on watching anime and playing osu! (a rhythm game)."
  ],
  skills: ["HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript", "React.js", "DaisyUI", "Git"]
}

const skillIcons: Record<Technology, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss3,
  TailwindCSS: SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  DaisyUI: SiDaisyui,
  Git: SiGit
}

export { bio, skillIcons };
export type { Technology };