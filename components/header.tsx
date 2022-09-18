import Logo from "./logo";
import ActiveLink from "./activeLink";
import MenuDrawer from "./menuDrawer";
import { useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Container,
  Button,
  useColorMode,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function Header({ menuData }) {
  const bgColor = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container
        variant="headerContainer"
        position="sticky"
        top="0px"
        maxW="100vw"
        bg={bgColor}
        zIndex="100"
        w="100%"
      >
        <Flex
          as="header"
          px={3}
          w="100%"
          maxW="1024px"
          h="4rem"
          alignItems="center"
          mx="auto"
        >
          <Logo />
          <Spacer />
          <ActiveLink
            href="/about"
            display={{ base: "none", md: "block" }}
            m="4"
            alignSelf="center"
            fontWeight="bold"
          >
            About
          </ActiveLink>
          <ActiveLink
            href="/contact"
            display={{ base: "none", md: "block" }}
            m="4"
            alignSelf="center"
            fontWeight="bold"
          >
            Contact
          </ActiveLink>
          <Button
            onClick={toggleColorMode}
            alignSelf="center"
            bg="transparent"
            _hover={{ background: "transparent" }}
          >
            {colorMode === "light" ? (
              <MoonIcon _hover={{ color: "blue.600" }} />
            ) : (
              <SunIcon _hover={{ color: "blue.300" }} />
            )}
          </Button>
          <MenuDrawer menuData={menuData} />
        </Flex>
      </Container>
    </>
  );
}
