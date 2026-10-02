import type { Technology } from "./skillIcons"

type Project = {
  name: string,
  year: number,
  description: string,
  tools: Technology[],
  category: "Web" | "UI",
  link: string,
  image: string
}

const projects: Project[] = [
  {
    name: "DailyEntry",
    year: 2024,
    description: "A journal website where you can document your daily experiences and long-term goals.",
    tools: ["React.js", "Chakra UI", "Node.js", "MySQL"],
    category: "Web",
    link: "https://github.com/RoyCDev/dailyEntry",
    image: "/thumbnails/dailyEntry.png"
  },
  {
    name: "157A Car Rental",
    year: 2024,
    description: "A simulation of car rental websites where the users can search, filter, and reserve vehicles. A separate admin panel is available to manage data. This is a group project from a database course.",
    tools: ["Flask", "Bootstrap", "SQLite"],
    category: "Web",
    link: "https://github.com/DuckyKay/CMPE157ACarRental",
    image: "thumbnails/rental157A.png"
  },
  {
    name: "Anime Character Search",
    year: 2023,
    description: "Want to know more about an anime character? Drop their name to see their bio and the earliest anime & manga they appeared in",
    tools: ["React.js", "Material UI", "GraphQL", "AniList API"],
    category: "Web",
    link: "https://github.com/RoyCDev/AnimeCharSearch",
    image: "thumbnails/charSearch.png"
  },
  {
    name: "GasoLean",
    year: 2025,
    description: "A mobile application that provides an in-depth analysis of your gas consumption to help you save more gas and decrease the use of fossil fuel usage.",
    tools: ["Adobe XD"],
    category: "UI",
    link: "https://xd.adobe.com/view/1d4ea304-7653-49fa-acb9-97e3dff2aec5-481d/screen/1f7fe80d-bace-48f5-a097-c7e3e20dfd3f",
    image: "thumbnails/gasoLean.png"
  },
  {
    name: "Tripler",
    year: 2023,
    description: "A mobile application that guides you in every step of the trip planning process, from finding tourist attractions to creating a personalized itinerary and booking a flight.",
    tools: ["Adobe XD"],
    category: "UI",
    link: "https://xd.adobe.com/view/7549d6ad-d7b8-4cf2-bbe2-4f996e6d497b-201a/",
    image: "thumbnails/tripler.png"
  },
]

export default projects
export type { Project }