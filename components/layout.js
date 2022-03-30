import Head from "next/head";
import NextLink from "next/link";
import Navigation from "./navigation";
import ActiveLink from "./ActiveLink";
import { useRef } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  chakra,
  Grid,
  Button,
  useColorMode,
  Container,
  Heading,
  Flex,
  Spacer,
  Link,
  GridItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

export const siteTitle = "Web Development Notes";

function MenuDrawer({ menuData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        display={{ base: "block", md: "none" }}
        alignSelf="center"
        onClick={onOpen}
        p="2"
        variant="outline"
      >
        <HamburgerIcon h="100%" w="100%" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex alignItems="center">
              <LogoSpan border="none">Web Dev</LogoSpan> Notes
              <Spacer />
              <Button bg="transparent" onClick={onClose}>
                <CloseIcon w={4} h={4} />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Container overflowY="auto">
              <Navigation menus={menuData} />
            </Container>
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="space-evenly">
            <ActiveLink href="/about" m="4" fontWeight="bold">
              About
            </ActiveLink>
            <ActiveLink href="/contact" m="4" fontWeight="bold">
              Contact
            </ActiveLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function LogoSpan(props) {
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

function Header({ menuData }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="header" boxShadow="base" px={2}>
      <Heading as="h1" fontSize={{ base: "md", md: "2xl" }} my={4} mx={2}>
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
  );
}

export default function Layout({ children, menuData }) {
  return (
    <Container pt="0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Web Development Notes"
          content="Useful note about web development"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header menuData={menuData} />
      <Grid
        display={{ base: "none", md: "grid" }}
        templateColumns="repeat(10, 1fr)"
      >
        <GridItem
          as="nav"
          minH="90vh"
          boxShadow="5px 3px 9px -10px"
          colSpan={2}
          pr={6}
          py={4}
          w="100%"
        >
          <Navigation menus={menuData} />
        </GridItem>
        <GridItem as="main" colSpan={8} p={4} pt={6} pl={6}>
          {children}
        </GridItem>
      </Grid>
      <Container
        as="main"
        display={{ base: "block", md: "none" }}
        p={4}
        w="100%"
      >
        {children}
      </Container>
    </Container>
  );
}
