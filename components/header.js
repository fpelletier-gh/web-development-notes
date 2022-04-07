import NextLink from "next/link";
import ActiveLink from "./ActiveLink";
import MenuDrawer from "./menuDrawer";
import { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Slide,
  chakra,
  Button,
  useColorMode,
  Heading,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";

export function LogoSpan(props) {
  const color = useColorModeValue("blue.600", "blue.300");
  return (
    <chakra.span
      as="span"
      color={color}
      borderColor={color}
      borderWidth="2px"
      borderRadius="md"
      px="0.3rem"
      {...props}
    />
  );
}

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
      if (window.scrollY === 0) {
        onOpen();
      }
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Slide
      direction="top"
      alignItems="center"
      in={isOpen}
      style={{ zIndex: 10 }}
      w="100vh"
    >
      <Flex
        as="header"
        bg={bgColor}
        boxShadow="base"
        px={2}
        w="100%"
        maxW="1200px"
        h="4rem"
        alignItems="center"
        m="auto"
        zIndex="100"
      >
        <Heading
          as="h1"
          variant="base"
          fontSize={{ base: "xl", md: "2xl" }}
          my={4}
          mx={2}
        >
          <NextLink href="/" passHref>
            <Link variant="logo">
              <LogoSpan>Web Dev</LogoSpan> Notes
            </Link>
          </NextLink>
        </Heading>
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
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <MenuDrawer menuData={menuData} />
      </Flex>
    </Slide>
  );
}
