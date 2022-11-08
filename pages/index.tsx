import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/post";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
// in development (yarn dev or npm run dev) run when request, but in production only run in buildtime
// so this function is not recommended to get data dynamicaly, if you want fetch data from server you can use getServerSideProps
// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((post) => {
            return (
              <li className={utilStyles.listItme} key={post.id}>
                <Link href={`/post/${post.id}`}>{post.title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={post.date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
