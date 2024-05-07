import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/layout-components/Header";
import Hero from "./components/Hero";
import ActivityList from "./components/ActivityList";
import Footer from "../../components/layout-components/Footer";

const Kegiatan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Balawista - Kegiatan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Hero />
      <ActivityList />
      <Footer />
    </>
  );
};

export default Kegiatan;
