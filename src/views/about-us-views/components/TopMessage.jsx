import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import agusDharmaImage from "../../../assets/about-us-views/AgusDharma.jpg";

const TopMessage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="flex justify-center items-center my-32">
      <div className="container">
        <div className="text-center md:text-left">
          <p className="font-semibold text-primary2">Tentang Kami</p>
          <h2 className="mt-1 md:mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10 md:max-w-3xl">
            Fisherman, lifeguard, boatman. Our goal is to to work together with
            everyone involved in tourism to promote Bali.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-24 items-center">
          <div
            data-AOS="fade-left"
            data-aos-duration="1200"
            className="col-span-7"
          >
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              As the origin of our name (Communication + Virtual = COVER)
              suggests, we established our company in June 2016 with the aim of
              bringing about a future where everyone can communicate through
              games, concerts, and other entertainment in online virtual spaces.
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              Ever since September 2017, when our first VTuber debuted, VTubers
              have become a household name, and our company, hololive
              production, has grown to have a global fanbase.
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              We are further promoting VTubers and other elements of Japans 2D
              entertainment to the rest of the world. In addition to our VTuber
              production, which have been our main content to date, we are also
              expanding our business into media mix, metaverse, and other
              diverse areas.
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              We believe that the Japanese content industry is one of our
              countrys most attractive features that can be shared with the rest
              of the world. Along with such appealing content, we are boldly
              investing in the future in accordance with our value of daring to
              take action. With a mid-to-long-term perspective in mind, we will
              continue to strategically develop a succession of businesses in
              our quest to create a culture that the world loves.
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              In this way, we aspire to increase the number of moments when
              people who love Japanese culture and the people of Japan can be
              proud of this culture
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              Together with fans, creators, investors, companies, and everyone
              else involved in COVER, we will continue to push forward to
              enliven the 2D entertainment culture originating in Japan. We hope
              you will continue to follow us in our future endeavors.
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              Motoaki Tanigo <br />
              President and CEO
            </p>
          </div>
          <img
            data-AOS="fade-right"
            data-aos-duration="1200"
            className="w-3/5 md:w-full mx-auto col-span-5"
            src={agusDharmaImage}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default TopMessage;
