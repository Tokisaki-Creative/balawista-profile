import { useEffect } from "react";
import heroImage from "../../../assets/about-us-views/hero/hero.svg"

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="h-screen flex justify-center items-center">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
                    <img data-AOS="fade-right" data-aos-duration="1200" className="w-3/5 md:w-full mx-auto" src={heroImage} alt="hero-image" />
                    <div data-AOS="fade-left" data-aos-duration="1200">
                        <div className="text-center md:text-left">
                            <p className="font-semibold text-primary">Tentang Kami</p>
                            <h2 className="mt-1 md:mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">Pesona Dewata</h2>
                        </div>
                        <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base"><span className="text-primary font-bold">Pesona Dewata</span> merupakan website pariwisata untuk menjelajahi keindahan dan kekayaan budaya Pulau Dewata, Bali. Dengan informasi yang komprehensif, website ini membimbing pengunjung melalui berbagai destinasi wisata, mulai dari wisata alam hingga budaya dan tradisi. Dari artikel informatif hingga tips unik, Pesona Dewata menjadi teman setia bagi para pelancong yang ingin merencanakan petualangan tak terlupakan di Bali.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero