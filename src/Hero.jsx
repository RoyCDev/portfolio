import { Box, Text } from "@chakra-ui/react"
import background from "./assets/background.jpg"

function Hero() {
    return (
        <Box
            bg={`url(${background}), linear-gradient(transparent 0%, black 95%)`}
            bgBlendMode="overlay"
            bgSize="cover"
            bgPosition="center"
            h="752px"
        >
            <Box maxW='1440px' m="0 auto" pt={56} px={12}>
                <Text fontSize={50}>Hello, World!</Text>
                <Text fontSize={25} mt={-2.5}>
                    I'm an aspiring <Text as="span" color="#3A83D8">frontend developer</Text>
                </Text>
            </Box>
        </Box>
    )
}

export default Hero