import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import { getPostData, getAllPostSlugArray, getMenuData } from "../../lib/posts";
import { Container } from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../components/mdxComponents";

export async function getStaticProps({ params }) {
  const slug = params.slug.join("/");
  const menuData = getMenuData();
  const postData = await getPostData(slug);
  const mdxSource = await serialize(postData.fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism, rehypeSlug, rehypeAutolinkHeadings],
    },
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

export default function Post({ postData, menuData }) {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Layout menuData={menuData} router={router}>
      <Head>
        <title>{postData.frontmatter.title}</title>
      </Head>
      <Container w="100%">
        <MDXRemote {...postData} components={components} />
      </Container>
    </Layout>
  );
}
