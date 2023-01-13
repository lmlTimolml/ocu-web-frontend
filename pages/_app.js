import "../styles/globals.css";
import Nav from "../components/layout/nav";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Nav />
      <Component {...pageProps} />
    </>
  );
}
