import { Box, Text } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Projects from "./Projects"

function App() {

  return (
    <Box pb={20}>
      <Navbar />
      <Hero />
      <Box maxW='1280px' m="0 auto" px={12}>
        <Text fontSize={35} textAlign="center" mt={5} mb={5}>My Projects</Text>
        <Projects />
      </Box>
    </Box>
  )
}

export default App
