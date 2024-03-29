import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import Header from "./header";
import {
  Tooltip,
  Button,
  Grid,
  Container,
  GridItem,
  Box,
  Icon,
} from "@chakra-ui/react";
import { BsArrowUpCircle } from "react-icons/bs";

export const siteTitle = "Web Development Notes";

export default function Layout({ children, menuData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const showButton = () => {
      if (typeof window !== "undefined") {
        if (lastScrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showButton);
      showButton();
      return () => {
        window.removeEventListener("scroll", showButton);
      };
    }
  }, [lastScrollY]);

  const handleBackToTopButton = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLastScrollY(0);
    }
  };

  return (
    <Container variant="siteContainer" pb="0px">
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
        display={["none", "none", "none", "grid"]}
        templateColumns="repeat(4, 1fr)"
        templateRows="90vh auto"
        w="100%"
        maxW="1024px"
        mx="auto"
      >
        <GridItem
          position="sticky"
          top="4rem"
          overflow="auto"
          minH="90vh"
          as="nav"
          minW="300px"
          boxShadow="5px -2px 9px -11px black"
          colSpan={1}
          rowSpan={1}
          pr={4}
          py={4}
          w="100%"
          display={{ base: "none", lg: "block" }}
        >
          <Navigation menus={menuData} />
        </GridItem>
        <GridItem
          as="main"
          display={{ base: "none", lg: "flex" }}
          flexDir="column"
          justifyContent="space-between"
          w="100%"
          colSpan={3}
          rowSpan={2}
          p={4}
          pt={6}
          pl={10}
          pr={6}
        >
          {children}
          <Box
            display={isVisible ? "block" : "none"}
            textAlign="right"
            pr={8}
            position="sticky"
            bottom="30px"
            zIndex="100"
          >
            <Tooltip hasArrow label="Back to top" placement="top">
              <Button onClick={handleBackToTopButton} variant="transparent">
                <Icon
                  bgColor="RGBA(0, 0, 0, 0.10)"
                  as={BsArrowUpCircle}
                  borderRadius="50%"
                  w={8}
                  h={8}
                />
                <br />
              </Button>
            </Tooltip>
          </Box>
          <Footer />
        </GridItem>
      </Grid>
      <GridItem
        as="main"
        minH="90vh"
        display={{ base: "flex", lg: "none" }}
        flexDir="column"
        justifyContent="space-between"
        p={4}
        px={[5, 10]}
        w="100%"
      >
        {children}
        <Box
          display={isVisible ? "block" : "none"}
          textAlign="right"
          pr={2}
          position="sticky"
          bottom="30px"
          zIndex="100"
        >
          <Button onClick={handleBackToTopButton} variant="transparent">
            <Icon
              bgColor="RGBA(0, 0, 0, 0.10)"
              as={BsArrowUpCircle}
              borderRadius="50%"
              w={8}
              h={8}
            />
            <br />
          </Button>
        </Box>
        <Footer />
      </GridItem>
    </Container>
  );
}
