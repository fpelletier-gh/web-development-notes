import Head from "next/head";
import NextLink from "next/link";
import Navigation from "./navigation";
import { useState } from "react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Grid,
  Button,
  useColorMode,
  Container,
  Heading,
  Flex,
  Spacer,
  Link,
  Box,
} from "@chakra-ui/react";

const name = "Web Development Notes";
export const siteTitle = "Web Development Notes";

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      alignSelf="center"
      onClick={toggle}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon size="xl" />}
    </Box>
  );
}

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex as="header">
      <NextLink href="/" passHref>
        <Link>
          <Heading as="h1" size="lg" my={4} mx={2}>
            {name}
          </Heading>
        </Link>
      </NextLink>
      <Spacer />
      <NextLink href="/about" passHref>
        <Link m="4" alignSelf="center" fontWeight="bold">
          About
        </Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link m="4" alignSelf="center" fontWeight="bold">
          Contact
        </Link>
      </NextLink>
      <Button onClick={toggleColorMode} alignSelf="center" bg="transparent">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    </Flex>
  );
}

export default function Layout({ children, menuData }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Web Development Notes"
          content="Useful note about web development"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <Grid templateColumns="repeat(10, 1fr)" gridColumnGap={4}>
        <Navigation menus={menuData} />
        {children}
      </Grid>
    </Container>
  );
}
