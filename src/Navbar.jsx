import { useDisclosure, IconButton, Collapse, Spacer, Link, Flex, Box, VStack, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import reactIcon from "./assets/react.svg"

// accounts for mobile and desktop size
function Brand({ fontSize, boxSize, gap, mt }) {
    return (
        <Link fontSize={fontSize} >
            <Flex gap={gap}>
                <Image src={reactIcon} boxSize={boxSize} alt="reactIcon" mt={mt} /> RoyC
            </Flex>
        </Link>
    )
}

function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const navLinks = ["Resume", "Projects", "Social"].map(item =>
        <Link href={`#${item.toLowerCase()}`} display="block" key={item}>{item}</Link>
    )

    return (
        <Box
            position="fixed"
            left="50%"
            transform="translateX(-50%)"
            w="100%"
            maxW='1440px'
            pt={5}
            px={12}
            zIndex={1}
        >
            <Box display={{ md: "none" }}>
                <Flex justifyContent="space-between" mb={3}>
                    <Brand fontSize="2xl" boxSize={6} gap={2} mt={0.5} />
                    <IconButton icon={<HamburgerIcon fontSize="lg" />} size="xs" variant="unstyled" onClick={onToggle} mt={1} />
                </Flex>
                <Collapse in={isOpen} startingHeight={1}>
                    <VStack alignItems="flex-start">{navLinks}</VStack>
                </Collapse>
            </Box>

            <Box display={{ base: "none", md: "block" }}>
                <Flex gap={10} h={12} alignItems="center">
                    <Brand fontSize="3xl" boxSize={7} gap={3} mt={1.5} />
                    <Spacer />
                    {navLinks}
                </Flex>
            </Box>
        </Box>
    )
}

export default Navbar;