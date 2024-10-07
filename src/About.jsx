import { VStack, Flex, Text, Image } from "@chakra-ui/react";
import profile from "./assets/profile.jpg"

function About() {
    return (
        <Flex
            mb={32}
            gap={{ base: 10, xl: 0 }}
            wrap={{ base: "wrap", xl: "nowrap" }}
            maxW={{ base: "650px", xl: "inherit" }} m="0 auto">

            <Image
                src={profile}
                boxSize={245}
                borderRadius="full"
                m="0 auto"
                shadow="0 0 150px #3A83D8"
                order={{ xl: 1 }}
                alignSelf="end" />

            <VStack alignItems="flex-start" color="#B6B6B6" gap={4} fontSize="lg"
                w={{ xl: "800px" }}>
                <Text>
                    Hello! I'm a fourth year Computer Science major at San Jose State University.
                </Text>
                <Text>
                    My first exposure to programming dates back to high school, where I learned about making Scratch games and websites. What I enjoyed was the immediate visual feedback. It's always exciting to witness how my projects evolve and come to life. Not only that, I get to experience that firsthand, seeing the progress unfold step by step.
                </Text>
                <Text>
                    I have high standards for my work quality, and I always strive to improve. Currently, I'm looking for an opportunity to bring my skills to a professional setting. I'm comfortable working on Frontend web development with React.js.
                </Text>
            </VStack>
        </Flex >
    )
}

export default About;