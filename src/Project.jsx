import { Card, CardBody, Text, Image, Tag, Flex } from "@chakra-ui/react";
import background from "./assets/backgroundfade.jpg"

function Project({ project: { name, date, image, desc, tools } }) {
    const renderedTools = tools?.map(tool =>
        <Tag variant="outline" colorScheme="whiteAlpha" pt={1}>{tool}</Tag>
    )

    return (
        <Card bg="black">
            <Image src={image} borderRadius={10} />
            <CardBody p={0} pt={2}>
                <Text fontSize="sm" fontWeight={700} color="#3A83D8" mt={3}> {date}</Text>
                <Text fontSize="xl" color="white">{name}</Text>

                <Text my={4} color="#B6B6B6">{desc}</Text>
                <Flex gap={2} wrap="wrap"> {renderedTools} </Flex>
            </CardBody>
        </Card>
    )
}

export default Project;

// _hover={{
//     bg: `url(${background}), linear-gradient(transparent 0%, black 95%)`,
//     bgBlendMode: "overlay",
//     bgSize: "cover",
//     transition: "background 0.5s ease-in-out"
// }}>