// `pages/_app.js`
import "../styles/global.css";
import '../styles/nav.css'
import Header from "../components/header";
import '../styles/posts.css'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Component {...pageProps} />
    </>
  );
}
