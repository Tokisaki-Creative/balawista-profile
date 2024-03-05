import Header from "../../components/layout-components/HeaderVersionTwo";
import Footer from "../../components/layout-components/Footer";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations"
import { Helmet } from "react-helmet";
import CulinaryDestination from "./components/CulinaryDestination";

const Destination = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Destinasi Wisata</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <Hero />
            <Destinations />
            <CulinaryDestination />
            <Footer />
        </>
    )
}

export default Destination;