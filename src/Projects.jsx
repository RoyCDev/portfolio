import { Tabs, Tab, TabList, TabPanel, TabPanels, SimpleGrid, Box } from "@chakra-ui/react"
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


    const renderedTabProjects = projects.map(p =>
        <TabPanel p={0}>
            <Project key={p.name} project={p} />
        </TabPanel>
    )

    return (
        <Box id="projects">
            <SimpleGrid gap={5} display={{ base: "grid", md: "none" }}>
                {renderedProjects}
            </SimpleGrid>

            <Tabs
                variant='soft-rounded'
                size={{ base: "sm", xl: "md" }}
                display={{ base: "none", md: "grid" }}
                maxW={{ base: "650px", xl: "1086px" }}
                m="0 auto"
                gridTemplateAreas={`"list panel"`}
                gridTemplateColumns={{ base: "215px 1fr", xl: "300px 1fr" }}
                gap={10}
            >
                <TabList gridArea="list" flexDirection="column" gap={1.5}>
                    <Tab>Daily Entry</Tab>
                    <Tab>157A Car Rental</Tab>
                    <Tab>AniChar Search</Tab>
                </TabList>
                <TabPanels gridArea="panel">
                    {renderedTabProjects}
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Projects