import Layout from "../../components/layout";
import Head from "next/head";
import {
  getPostData,
  getSortedPostsData,
  getAllPostSlugArray,
} from "../../lib/posts";
import { GridItem, Heading } from "@chakra-ui/react";
import Navigation from "../../components/navigation";

export async function getStaticProps({ params }) {
  const slug = params.slug.join("/");
  const postData = await getPostData(slug);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugArray();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {
  const MDWrapper = (props) => <article className="md-wrapper" {...props} />;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navigation allPostsData={allPostsData} />
      <GridItem as="main" colSpan={5} p={2} pl={6} w="100%">
        <Heading as="h2" size="md" mb={4}>
          {postData.title}
        </Heading>
        <MDWrapper dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </GridItem>
    </Layout>
  );
}
