import "../src/globals.scss";

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />;
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Lobster;
      }
      .rounded-pill {
        color: #000 !important;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>

  </>
}

export default MyApp;