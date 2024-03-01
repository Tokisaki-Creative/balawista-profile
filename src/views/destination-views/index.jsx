import Header from "../../components/layout-components/HeaderVersionTwo";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations"
import { Helmet } from "react-helmet";

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
        </>
    )
}

export default Destination;