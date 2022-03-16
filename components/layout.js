import Head from "next/head";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Grid,
  Button,
  useColorMode,
  Container,
  Heading,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";

const name = "Web Development Notes";
export const siteTitle = "Web Development Notes";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="header">
      <Heading as="h1" my={4} mx={2}>
        {name}
      </Heading>
      <Spacer />
      <NextLink href="/" passHref>
        <Link m="4" alignSelf="center" fontWeight="bold">
          Home
        </Link>
      </NextLink>
      <NextLink href="/about" passHref>
        <Link m="4" alignSelf="center" fontWeight="bold">
          About
        </Link>
      </NextLink>
      <Button onClick={toggleColorMode} alignSelf="center" bg="transparent">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
}

export default function Layout({ children }) {
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
      <Grid templateColumns="repeat(6, 1fr)">{children}</Grid>
    </Container>
  );
}
