import Footer from "../../components/layout-components/Footer"
import Header from "../../components/layout-components/HeaderVersionTwo"
import Hero from "./components/Hero"
import ProfileTeam from "./components/ProfileTeam"
import FollowUs from "../landing-views/components/FollowUs"
import { Helmet } from "react-helmet"

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tentang Kami</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <Hero />
            <ProfileTeam />
            <FollowUs />
            <Footer />
        </>
    )
}

export default AboutUs