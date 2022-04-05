import Head from "next/head";
import Navigation from "./navigation";
import Header from "./header";
import { Grid, Container, GridItem } from "@chakra-ui/react";

export const siteTitle = "Web Development Notes";

export default function Layout({ children, menuData }) {
  return (
    <Container pt="4rem">
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
