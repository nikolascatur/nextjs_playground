import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

const YourComponent = () => {
  return (
    <Image
      src="/images/profile.jpeg"
      width={400}
      height={400}
      alt="Your name"
    ></Image>
  );
};

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`);
        }}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
        <br />
        <YourComponent />
      </h2>
    </Layout>
  );
}
