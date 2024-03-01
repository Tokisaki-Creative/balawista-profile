import Header from "../../components/layout-components/Header";
import ArticleAndBlog from "./components/ArticleAndBlog";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Maps from "./components/Maps";
import MediaPartner from "./components/MediaPartner";
import FollowUs from "./components/FollowUs";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import Footer from "../../components/layout-components/Footer";
import { Helmet } from "react-helmet";

const LandingPages = () => {
  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pesona Dewata</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />
        <Hero />
        <MediaPartner />
        <Welcome />
        <Destination />
        <Information />
        <ArticleAndBlog />
        <Testimonials />
        <FollowUs />
        <Footer />
        {/* <Maps /> */}
    </>
  )
}

export default LandingPages;