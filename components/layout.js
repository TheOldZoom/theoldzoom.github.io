import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Zoom';
export const siteContent = "The Best Developer so far 😎"
export const siteTitle = "Zoom is a dev";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="https://zoom.is-a.dev/api/i/ZoomProfile.png" />
        <meta
          name="description"
          content="Zoom's Portfolio. Let me finish it !!"
        />
        <meta
          property="og:image"
          content={"https://zoom.is-a.dev/api/i/ZoomProfile.png"}
        />
        <meta name="og:description" content={siteContent} /> 
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_mage"i />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="https://zoom.is-a.dev/api/i/ZoomProfile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="https://zoom.is-a.dev/api/i/ZoomProfile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
