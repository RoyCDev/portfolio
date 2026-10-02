import type { IconType } from "react-icons";
import { SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiDaisyui, SiGit, SiChakraui, SiNodedotjs, SiMysql, SiFlask, SiBootstrap, SiSqlite, SiMui, SiGraphql, SiAnilist } from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";

type Technology = "HTML" | "CSS" | "TailwindCSS" | "JavaScript" | "TypeScript" | "React.js" | "DaisyUI" | "Git" | "Chakra UI" | "Node.js" | "MySQL" | "Flask" | "Bootstrap" | "SQLite" | "Material UI" | "GraphQL" | "AniList API" | "Adobe XD"

const skillIcons: Record<Technology, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  TailwindCSS: SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  DaisyUI: SiDaisyui,
  Git: SiGit,
  "Chakra UI": SiChakraui,
  "Node.js": SiNodedotjs,
  MySQL: SiMysql,
  Flask: SiFlask,
  Bootstrap: SiBootstrap,
  SQLite: SiSqlite,
  "Material UI": SiMui,
  GraphQL: SiGraphql,
  "AniList API": SiAnilist,
  "Adobe XD": TbBrandAdobeXd
}

export default skillIcons;
export type { Technology };