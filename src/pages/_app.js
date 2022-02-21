import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/app.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>E&amp;B Solutions</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);
export default MyApp;
