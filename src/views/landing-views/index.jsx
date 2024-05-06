import Header from "../../components/layout-components/Header";
import ArticleAndBlog from "./components/ArticleAndBlog";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Information from "./components/Information";
import MediaPartner from "./components/MediaPartner";
import FollowUs from "./components/FollowUs";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import Footer from "../../components/layout-components/Footer";
import { Helmet } from "react-helmet";
import ActivityGallery from "./components/ActivityGallery";
import TentangBalawista from "./components/TentangBalawista";

const LandingPages = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Balawista - Landing Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Hero />
      <MediaPartner />
      <Welcome />
      <TentangBalawista />
      <ActivityGallery />
      <Footer />
    </>
  );
};

export default LandingPages;
