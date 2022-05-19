import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";
import Header from "./header";
import { Grid, Container, GridItem, useColorModeValue } from "@chakra-ui/react";

export const siteTitle = "Web Development Notes";

export default function Layout({ children, menuData }) {
  const borderColor = useColorModeValue("gray.200", "gray.600");
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
      <Grid display="grid" templateColumns="repeat(10, 1fr)">
        <GridItem
          as="nav"
          minH="90vh"
          minW="220px"
          boxShadow="5px -2px 9px -11px black"
          // borderRight="1px solid"
          // borderColor={borderColor}
          colSpan={2}
          pr={6}
          py={4}
          w="100%"
          display={{ base: "none", md: "block" }}
        >
          <Navigation menus={menuData} />
        </GridItem>
        <GridItem
          as="main"
          display={{ base: "none", md: "flex" }}
          flexDir="column"
          justifyContent="space-between"
          colSpan={8}
          p={4}
          pt={6}
          pl={6}
        >
          {children}
          <Footer />
        </GridItem>
      </Grid>
      <GridItem
        as="main"
        minH="90vh"
        display={{ base: "flex", md: "none" }}
        flexDir="column"
        justifyContent="space-between"
        p={4}
        w="100%"
      >
        {children}
        <Footer />
      </GridItem>
    </Container>
  );
}
