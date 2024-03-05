import { Routes, Route } from "react-router-dom";
import LandingPages from "@/views/landing-views";
import Destination from "@/views/destination-views";
import Article from "@/views/article-views";
import DetailArticleOne from "@/views/article-views/DetailArticleOne";
import AboutUs from "@/views/about-us-views";
import Header from "./components/layout-components/HeaderVersionTwo"
import Footer from "./components/layout-components/Footer"
import DetailArticleTwo from "./views/article-views/DetailArticleTwo";
import DetailDestinationOne from "./views/destination-views/DetailDestinationOne";
import DetailDestinationTwo from "./views/destination-views/DetailDestinationTwo";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/destinasi" element={<Destination />} />
            <Route path="/artikel" element={<Article />} />
            <Route path="/detail-artikel/1" element={
              <>
                <Header />
                <DetailArticleOne />
                <Footer />
              </>
            } />
            <Route path="/detail-artikel/2" element={
              <>
                <Header />
                <DetailArticleTwo />
                <Footer />
              </>
            } />
            <Route path="/detail-destinasi/1" element={
              <>
                <Header />
                <DetailDestinationOne />
                <Footer />
              </>
            } />
            <Route path="/detail-destinasi/2" element={
              <>
                <Header />
                <DetailDestinationTwo />
                <Footer />
              </>
            } />
            <Route path="/tentang-kami" element={<AboutUs />} />
        </Routes>
    </>
  )
}

export default App
