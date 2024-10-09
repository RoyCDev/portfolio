import { useDisclosure, IconButton, Collapse, Spacer, Link, Flex, Box, VStack, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import reactIcon from "./assets/react.svg"

// accounts for mobile and desktop size
function Brand({ fontSize, boxSize, gap, mt }) {
    return (
        <Link fontSize={fontSize} href="#">
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
            backdropFilter="blur(5px)"
            w="100%"
            zIndex={1}
        >
            <Box maxW='1440px' m="0 auto" pt={5} px={12}>
                <Box display={{ md: "none" }}>
                    <Flex justifyContent="space-between">
                        <Brand fontSize="2xl" boxSize={6} gap={2} mt={0.5} />
                        <IconButton icon={<HamburgerIcon fontSize="lg" />} size="xs" variant="unstyled" onClick={onToggle} mt={1} />
                    </Flex>
                    <Collapse in={isOpen} startingHeight={1}>
                        <VStack alignItems="flex-start" my={3}>{navLinks}</VStack>
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
        </Box>
    )
}

export default Navbar;