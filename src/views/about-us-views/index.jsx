import Footer from "../../components/layout-components/Footer";
import Header from "../../components/layout-components/Header";
import Hero from "./components/Hero";
import FollowUs from "../landing-views/components/FollowUs";
import { Helmet } from "react-helmet";
import KamiAdalahBalawista from "./components/KamiAdalahBalawista";
import TopMessage from "./components/TopMessage";
import History from "./components/History";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Balawista - Tentang Kami</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Hero />
      <KamiAdalahBalawista />
      <TopMessage />
      <History />
      <FollowUs />
      <Footer />
    </>
  );
};

export default AboutUs;
