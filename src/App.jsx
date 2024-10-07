import { Box, Text } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"

function App() {
  return (
    <Box pb={20}>
      <Navbar />
      <Hero />
      <Box maxW='1280px' m="0 auto" px={12}>
        <Text fontSize={35} mt={5} mb={{ base: 5, xl: 8 }} textAlign="center">
          About Me
        </Text>
        <About />
        <Text fontSize={35} mt={16} mb={5} textAlign="center">
          My Projects
        </Text>
        <Projects />
      </Box>
    </Box>
  )
}

export default App
