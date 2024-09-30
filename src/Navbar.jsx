import { IconButton, Collapse, Show, Hide, Spacer, Link, Flex, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const navLinks = ["Projects", "Social"].map(item =>
        <Link href={`#${item.toLowerCase()}`} display="block" key={item}>{item}</Link>
    )

    return (
        <>
            <Hide above="md">
                <Flex justifyContent="space-between" alignItems="center">
                    <Link fontSize="2xl">RoyC</Link>
                    <IconButton icon={<HamburgerIcon />} size="lg" variant="ghost" onClick={onToggle} />
                </Flex>
                <Collapse in={isOpen} startingHeight={1}>
                    {navLinks}
                </Collapse>
            </Hide>

            <Show above="md">
                <Flex gap={10} h={12} alignItems="center">
                    <Link fontSize="2xl">RoyC</Link>
                    <Spacer />
                    {navLinks}
                </Flex>
            </Show>

        </>
    )
}

export default Navbar;