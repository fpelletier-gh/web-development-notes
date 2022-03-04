import Layout from "../../components/layout";
import Head from "next/head";
// import { useRouter } from "next/router";
import {
  // getAllSlugs,
  getPostData,
  getSortedPostsData,
  getAllPostSlugArray,
} from "../../lib/posts";
// import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Article from "../../components/article";
import Navigation from "../../components/navigation";
import Link from "next/link";

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
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navigation>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, slug, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </Navigation>
      <Article>
        <h1 className={utilStyles.headingMd}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* <Date dateString={postData.date} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Article>
    </Layout>
  );
}
