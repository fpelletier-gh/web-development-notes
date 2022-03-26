import Layout from "../../components/layout";
import Head from "next/head";
import { getPostData, getAllPostSlugArray, getMenuData } from "../../lib/posts";
import { Heading } from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticProps({ params }) {
  const slug = params.slug.join("/");
  const menuData = getMenuData();
  const postData = await getPostData(slug);
  const mdxSource = await serialize(postData.fileContents, {
    parseFrontmatter: true,
  });

  return {
    props: {
      postData: mdxSource,
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

const components = { h2: Heading };

export default function Post({ postData, menuData }) {
  return (
    <Layout menuData={menuData}>
      <Head>
        <title>{postData.frontmatter.title}</title>
      </Head>
      <Heading as="h2" size="md" mb={4}>
        {postData.frontmatter.title}
      </Heading>
      <MDXRemote {...postData} components={components} />
    </Layout>
  );
}
