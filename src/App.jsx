import { Container } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Hero from "./Hero"

function App() {

  return (
    <Container maxW='1280px' m="0 auto" mt={3}>
      <Navbar />
      <Hero />
    </Container>
  )
}

export default App
