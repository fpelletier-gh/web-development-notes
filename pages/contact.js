import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import Navigation from "../components/navigation";
import { GridItem, Heading } from "@chakra-ui/react";

export default function Contact({ menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <GridItem
        as="main"
        colSpan={5}
        p={2}
        pl={6}
        w="100%"
        borderLeft="1px solid gray"
      >
        <Heading as="h2" size="md" mb={4}>
          Contact Page
        </Heading>
      </GridItem>
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
