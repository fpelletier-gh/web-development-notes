import Logo from "./logo";
import ActiveLink from "./activeLink";
import MenuDrawer from "./menuDrawer";
import { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Container,
  useDisclosure,
  Slide,
  Button,
  useColorMode,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function Header({ menuData }) {
  const bgColor = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        onClose();
      } else {
        onOpen();
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Container
        variant="headerContainer"
        position="fixed"
        top="0px"
        maxW="100vw"
        bg={bgColor}
        display={lastScrollY > 0 ? "none" : null}
        zIndex="100"
        w="100%"
      >
        <Flex
          as="header"
          px={2}
          w="100%"
          maxW="1500px"
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
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Container
          variant="headerContainer"
          display={lastScrollY === 0 ? "none" : null}
        >
          <Flex
            as="header"
            bg={bgColor}
            px={2}
            w="100%"
            maxW="1500px"
            h="4rem"
            alignItems="center"
            m="auto"
            zIndex="100"
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
      </Slide>
    </>
  );
}
