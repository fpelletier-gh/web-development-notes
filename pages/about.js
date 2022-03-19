import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import { Heading } from "@chakra-ui/react";

export default function About({ menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Heading as="h2" size="md" mb={4}>
        About Page
      </Heading>
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
