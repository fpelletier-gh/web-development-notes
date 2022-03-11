import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
// import Link from "next/link";
import Navigation from "../components/navigation";
import Article from "../components/article";
import { GridItem } from "@chakra-ui/react";

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Navigation allPostsData={allPostsData} />
      <GridItem as="main" colSpan={5} p={2} pl={6} w="100%">
        Home
      </GridItem>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
