import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import { Heading, Container } from "@chakra-ui/react";

export default function Home({ menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h2" size="xl" my={8}>
          Web Development Notes
        </Heading>
        <Heading
          as="h4"
          size="md"
          variant="base"
          w="60ch"
          textAlign="center"
          mb={4}
        >
          Some personal notes, reference and concept related to JavaScript, Web
          development and Vim.
        </Heading>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const menuData = getMenuData();
  return {
    props: {
      menuData,
    },
  };
}
