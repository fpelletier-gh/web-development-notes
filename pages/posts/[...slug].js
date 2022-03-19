import Layout from "../../components/layout";
import Head from "next/head";
import { getPostData, getAllPostSlugArray, getMenuData } from "../../lib/posts";
import { GridItem, Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import Navigation from "../../components/navigation";

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
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navigation menus={menuData} />
      <GridItem
        as="main"
        colSpan={7}
        p={2}
        pl={6}
        w="100%"
        borderLeft="1px solid gray"
      >
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
        {/* <MDWrapper dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </GridItem>
    </Layout>
  );
}
