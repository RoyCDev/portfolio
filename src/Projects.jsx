import { SimpleGrid } from "@chakra-ui/react"
import Project from "./Project"
import dailyEntry from "./assets/dailyEntry.png"
import rental157A from "./assets/rental157A.png"
import charSearch from "./assets/charSearch.png"

function Projects() {
    const projects = [
        {
            name: "Daily Entry",
            date: "Summer 2024",
            image: dailyEntry,
            tools: ["React", "Chakra UI", "Node.js", "MySQL"]
        },
        {
            name: "157A Car Rental",
            date: "Spring 2024",
            image: rental157A,
            tools: ["Flask", "Bootstrap", "SQLite", "Group"]
        },
        {
            name: "Anime Character Search",
            date: "Summer 2023",
            image: charSearch,
            desc: "Uses AniList API to fetch character info upon user requests. Hover over the characters to see their bios and the earliest anime/ manga they appear in.",
            tools: ["React", "Material UI", "GraphQL", "AniList API"]
        }
    ]

    const renderedProjects = projects.map(p =>
        <Project key={p.name} project={p} />
    )

    return (
        <SimpleGrid id="projects" columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
            {renderedProjects}
        </SimpleGrid>
    )
}

export default Projects