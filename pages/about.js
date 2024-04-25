import Upcoming from '../components/upcoming';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'
export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi 👋 I am Zoom, I am a Discord.js Developer and owner of <Link href={"https://zbot-lol.vercel.app/"}>Zbot</Link></p>
        <p>
        </p>
      </section>
    </Layout>
  );
}