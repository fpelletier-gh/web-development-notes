import Layout from "../../components/layout";
import Head from "next/head";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Article from "../../components/article";
import Navigation from "../../components/navigation";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
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
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </Navigation>
      <Article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Article>
    </Layout>
  );
}
