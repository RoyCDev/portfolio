import { VStack, Flex, Text, Image, Box, Link } from "@chakra-ui/react";
import profile from "./assets/profile.jpg"
import profileReal from "./assets/profileReal.png"

function About() {
    return (
        <Flex
            mb={32}
            gap={{ base: 10, xl: 14 }}
            wrap={{ base: "wrap", xl: "nowrap" }}
            maxW={{ base: "650px", xl: "fit-content" }} m="0 auto">

            <Box order={{ xl: 1 }} position="relative" m="0 auto">
                <Image
                    src={profileReal}
                    boxSize={230}
                    borderRadius="full"
                />

                <Image
                    src={profile}
                    boxSize={230}
                    borderRadius="full"
                    shadow="0 0 150px #3A83D8"
                    position="absolute"
                    top={0}
                    _hover={{ opacity: 0, transition: "opacity 1s" }}
                />
            </Box>

            <VStack alignItems="flex-start" color="#B6B6B6" gap={4} fontSize="lg"
                w={{ xl: "800px" }}>
                <Text>
                    Hello! I'm a fourth year Computer Science major at San Jose State University.
                </Text>
                <Text>
                    My first exposure to programming dates back to high school, where I learned about making <Text as="a" href="https://scratch.mit.edu/users/CheungRcompsci/" color="#3A83D8" textDecoration="underline">Scratch games</Text> and websites. What I enjoyed was the immediate visual feedback. It's always exciting to witness how my projects evolve and come to life. I get to see the progress unfold step by step.
                </Text>
                <Text>
                    I have high standards for my work quality, and I always strive to improve. Currently, I'm looking for an opportunity to bring my skills to a professional setting. I'm comfortable working on Frontend web development with React.js.
                </Text>
            </VStack>
        </Flex >
    )
}

export default About;