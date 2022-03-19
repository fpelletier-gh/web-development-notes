import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMenuData } from "../lib/posts";
import { Heading } from "@chakra-ui/react";

export default function Home({ menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading as="h2" size="md" mb={4}>
        Home
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
