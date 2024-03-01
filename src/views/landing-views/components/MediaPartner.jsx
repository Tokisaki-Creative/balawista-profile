import { useEffect } from "react";
import baliTheIslandImage from "../../../assets/landing-views/media-partner/bali-the-island.png"
import cemagiImage from "../../../assets/landing-views/media-partner/cemagi.png"
import pesonaIndonesiaImage from "../../../assets/landing-views/media-partner/pesona-indonesia.png"

import AOS from "aos";
import "aos/dist/aos.css";

const MediaPartner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                <div data-AOS="fade-down" data-aos-duration="1200">
                    <p className="text-[#696D77] font-semibold text-center">Partner Kami</p>
                </div>
                <div data-AOS="fade-up" data-aos-duration="1200" className="mt-4 md:mt-8 sm:grid grid-cols-1 md:flex items-center justify-center gap-4 lg:gap-8">
                    <img className="mx-auto lg:mx-0" src={baliTheIslandImage} alt="bali-the-island" />
                    <img className="mx-auto lg:mx-0" src={cemagiImage} alt="cemagi" />
                    <img className="mx-auto lg:mx-0" src={pesonaIndonesiaImage} alt="pesona-indonesia" />
                </div>
            </div>
        </section>
    )
}

export default MediaPartner