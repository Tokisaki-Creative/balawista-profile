import { useEffect } from "react";
import sangsitImage from "../../../assets/landing-views/media-partner/sangsit.png";
import ilsImage from "../../../assets/landing-views/media-partner/ils.png";
import disparImage from "../../../assets/landing-views/media-partner/dispar.png";
import balawistaBadungImage from "../../../assets/landing-views/media-partner/balawista.png";

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
          <p className="text-[#696D77] font-semibold text-center">
            Partner Kami
          </p>
        </div>
        <div
          data-AOS="fade-up"
          data-aos-duration="1200"
          className="mt-4 md:mt-8 grid grid-cols-2 md:flex items-center justify-center gap-4 lg:gap-8"
        >
          <img
            className="mx-auto lg:mx-0 h-[90px] my-5 lg:my-0"
            src={sangsitImage}
            alt="sangsit"
          />
          <img
            className="mx-auto lg:mx-0 h-[90px] my-5 lg:my-0"
            src={ilsImage}
            alt="international-life-saving"
          />
          <img
            className="mx-auto lg:mx-0 h-[90px] my-5 lg:my-0"
            src={disparImage}
            alt="dinas-pariwisata"
          />
          <img
            className="mx-auto lg:mx-0 h-[90px] my-5 lg:my-0"
            src={balawistaBadungImage}
            alt="balawista-badung"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaPartner;
