import { useColorModeValue, Box, HStack, Icon } from "@chakra-ui/react";
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
      <ActiveLink href="/contact">
        <Icon as={BsEnvelope} />
      </ActiveLink>
      <ActiveLink href="https://github.com/fpelletier-gh">
        <Icon as={BsGithub} />
      </ActiveLink>
      <ActiveLink href="https://francispelletier.netlify.app">
        <Icon as={BsPersonCircle} />
      </ActiveLink>
      <ActiveLink href="https://github.com/fpelletier-gh/web-development-notes">
        <Icon as={BsCodeSlash} />
      </ActiveLink>
    </HStack>
  );
}
