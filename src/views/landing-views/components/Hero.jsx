import { useEffect } from "react";
import { Flex } from "antd";
import heroImage from "../../../assets/landing-views/hero/hero-image.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroImage}
        alt="hero-image"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <Flex
        data-AOS="fade-up"
        data-aos-duration="1200"
        className="absolute top-0 w-full h-full flex-col justify-center items-center"
      >
        <h1 className="md:max-w-xl text-center text-4xl md:text-5xl font-extrabold text-white lg:leading-[60px]">
          Official Website <span className="">Balawista Buleleng</span>
        </h1>
        {/* <p className="mt-2 md:mt-4 text-white text-sm md:text-base lg:text-lg max-w-sm md:max-w-lg lg:max-w-xl text-center">Kami akan selalu update terkait tempat liburan baru di Bali dengan mengikuti perkembangan para influencer di sosial media</p> */}
        <Flex className="mt-4 md:mt-8 flex-col md:flex-row md:justify-center lg:justify-start">
          <a
            href="#wisata"
            className="hover:cursor-pointer hover:bg-primary/90 hover:text-white bg-primary text-white px-6 py-3 rounded-lg text-center text-sm md:text-base transition-all duration-500 font-bold"
          >
            Jelajahi Sekarang
          </a>
        </Flex>
      </Flex>
    </section>
  );
};

export default Hero;
