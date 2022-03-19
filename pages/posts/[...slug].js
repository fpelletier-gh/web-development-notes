import Layout from "../../components/layout";
import Head from "next/head";
import { getPostData, getAllPostSlugArray, getMenuData } from "../../lib/posts";
import { Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export async function getStaticProps({ params }) {
  const slug = params.slug.join("/");
  const menuData = getMenuData();
  const postData = await getPostData(slug);
  return {
    props: {
      postData,
      menuData,
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

export default function Post({ postData, menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Heading as="h2" size="md" mb={4}>
        {postData.title}
      </Heading>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        remarkPlugins={[remarkGfm]}
        skipHtml
      >
        {postData.contentHtml}
      </ReactMarkdown>
    </Layout>
  );
}
