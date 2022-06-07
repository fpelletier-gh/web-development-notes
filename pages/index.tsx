import Head from "next/head";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import { Heading, Box } from "@chakra-ui/react";

export default function Home({ menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading as="h2" size="xl" my={8}>
          Web Development Notes
        </Heading>
        <Heading
          as="h4"
          size="md"
          fontWeight="normal"
          variant="base"
          maxW="60ch"
          textAlign="center"
          mb={4}
        >
          Some personal notes, reference and concept related to JavaScript, Web
          development and Vim.
        </Heading>
      </Box>
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
