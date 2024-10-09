import { Box, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Social() {
    return (
        <Box>
            <Icon as={FaGithub} boxSize={45} />
            <Icon as={FaLinkedin} boxSize={45} />
        </Box>
    )
}

export default Social;