import Header from "../../components/layout-components/HeaderVersionTwo"
import Footer from "../../components/layout-components/Footer"
import Hero from "../article-views/components/Hero"
import NewArticle from "./components/NewArticle"
import PopularArticle from "./components/PopularArticles"
import { Helmet } from "react-helmet"

const Article = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Artikel & Blog</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <Hero />
            <PopularArticle />
            <NewArticle />
            <Footer />
        </>
    )
}

export default Article