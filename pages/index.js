import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
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