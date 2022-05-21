import {
  useColorModeValue,
  Box,
  HStack,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import ActiveLink from "./activeLink";
import {
  BsGithub,
  BsCodeSlash,
  BsEnvelope,
  BsPersonCircle,
} from "react-icons/bs";

export default function Footer() {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <HStack
      as="footer"
      spacing="1.5rem"
      borderTop="1px solid"
      borderColor={borderColor}
      mt={4}
      pt={4}
      alignItems="center"
      justifyContent="center"
    >
      <Tooltip hasArrow label="Contact me" placement="top">
        <Box>
          <ActiveLink href="/contact">
            <Icon as={BsEnvelope} w={5} h={5} />
          </ActiveLink>
        </Box>
      </Tooltip>
      <Tooltip label="Github Profile" placement="top">
        <Box>
          <ActiveLink href="https://github.com/fpelletier-gh">
            <Icon as={BsGithub} w={5} h={5} />
          </ActiveLink>
        </Box>
      </Tooltip>
      <Tooltip label="Portfolio" placement="top">
        <Box>
          <ActiveLink href="https://francispelletier.netlify.app">
            <Icon as={BsPersonCircle} w={5} h={5} />
          </ActiveLink>
        </Box>
      </Tooltip>
      <Tooltip label="This Project Repository" placement="top">
        <Box>
          <ActiveLink href="https://github.com/fpelletier-gh/web-development-notes">
            <Icon as={BsCodeSlash} w={5} h={5} />
          </ActiveLink>
        </Box>
      </Tooltip>
    </HStack>
  );
}
