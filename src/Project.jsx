import { Card, CardBody, Text, Image, Tag, Flex } from "@chakra-ui/react";
import background from "./assets/backgroundfade.jpg"

function Project({ project: { name, date, image, desc, tools } }) {
    const renderedTools = tools?.map(tool =>
        <Tag variant="solid" colorScheme='whiteAlpha' pt={1}>{tool}</Tag>
    )

    return (
        <Card bg="black" borderRadius={15}
            _hover={{
                // bg: `url(${background}), linear-gradient(transparent 0%, black 95%)`,
                bgBlendMode: "overlay",
                bgSize: "cover",
                transition: "background 0.5s ease-in-out"
            }}>
            <Image src={image} opacity={0.75} borderRadius={15}></Image>

            <CardBody pt={2}>
                <Text fontSize="xl" mt={5} color="white">{name}</Text>
                <Text color="#3A83D8"> {date}</Text>
                <Text mt={4} color="#B6B6B6">{desc}</Text>
                <Flex gap={2} wrap="wrap" mt={5}>{renderedTools}</Flex>
            </CardBody>
        </Card>
    )
}

export default Project;