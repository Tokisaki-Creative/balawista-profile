import { Routes, Route } from "react-router-dom";
import LandingPages from "@/views/landing-views";
import AboutUs from "@/views/about-us-views";
import { Helmet } from "react-helmet";
import Kegiatan from "./views/kegiatan-views";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/tentang-kami" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
