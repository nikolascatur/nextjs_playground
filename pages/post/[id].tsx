import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/post";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";

// export async function getStaticPaths() {
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log(`PATH LIST => ${paths}`);
  console.table(paths);
  return {
    paths,
    fallback: false,
  };
};

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params.id);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

// export default function Post({ postData }) {
function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.id}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export default Post;
