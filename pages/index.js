import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from 'gray-matter'
export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 👋 I am Zoom, I am a Discord.js Developer and owner of{" "}
          <Link href={"https://zbot-lol.vercel.app/"}>Zbot</Link>
        </p>
        <p></p>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map(filename => {
    const slug = filename.replace(".md", '')

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    
    const {data:frontmatter} = matter(markdownWithMeta)



    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    },
  };
}
