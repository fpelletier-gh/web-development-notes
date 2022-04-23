import Head from "next/head";
import ResponsiveImage from "../components/responsiveImage";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import { Heading, Stack, Text, Flex } from "@chakra-ui/react";
import aboutPhoto from "../public/AboutPhoto.jpg";

export default function About({ menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Stack direction={["column", "row"]} spacing={10} pt={[10, 10]}>
        <Flex
          justifyContent="center"
          minW={200}
          minH={200}
          mx={[0, 10]}
          alignItems="flex-start"
        >
          <ResponsiveImage
            src={aboutPhoto}
            width={200}
            height={200}
            borderRadius={100}
            filter="grayscale(80%)"
            w="auto"
            h="auto"
          />
        </Flex>
        <Flex flexDir="column">
          <Heading as="h2" textAlign={["center", "left"]} size="xl" mb={[4, 5]}>
            About Me
          </Heading>
          <Text textAlign={["center", "left"]}>
            I'm Francis Pelletier, I'm pationate about everything related to web
            development, javascript, react, linux and vim.
          </Text>
        </Flex>
      </Stack>{" "}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = getMenuData();
  return {
    props: {
      menuData,
    },
  };
};
