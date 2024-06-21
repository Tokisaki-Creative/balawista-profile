import { useEffect } from "react";
import balaImage1 from "../../../assets/landing-views/documentation/1.jpg";
import balaImage2 from "../../../assets/landing-views/documentation/2.jpg";
import balaImage3 from "../../../assets/landing-views/documentation/3.jpg";
import balaImage4 from "../../../assets/landing-views/documentation/4.jpg";
import balaImage5 from "../../../assets/landing-views/documentation/5.jpg";
import balaImage6 from "../../../assets/landing-views/documentation/6.jpg";
import balaImage7 from "../../../assets/landing-views/documentation/7.jpg";
import balaImage8 from "../../../assets/landing-views/documentation/8.jpg";
import balaImage9 from "../../../assets/landing-views/documentation/9.jpg";
import balaImage10 from "../../../assets/landing-views/documentation/10.jpg";
import balaImage11 from "../../../assets/landing-views/documentation/11.jpg";
import balaImage12 from "../../../assets/landing-views/documentation/12.jpg";
import balaImage13 from "../../../assets/landing-views/documentation/13.jpg";
import balaImage14 from "../../../assets/landing-views/documentation/17.jpg";
import balaImage15 from "../../../assets/landing-views/documentation/18.jpg";
import balaImage16 from "../../../assets/landing-views/documentation/19.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const ActivityGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="my-32">
      <div className="container">
        {/* Title */}
        <div
          data-AOS="fade-down"
          data-aos-duration="1200"
          className="text-center"
        >
          <p className="font-semibold text-primary text-base">
            Galeri Kegiatan
          </p>
          <h2 className="max-w-sm mx-auto mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">
            Dokumentasi Kegiatan <span className="text-primary">Balawista</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-4 md:mt-8 flex items-center justify-between">
          <div
            class="columns-1 gap-5 sm:columns-1 sm:gap-8 md:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-8"
            data-AOS="fade-down"
            data-aos-duration="1200"
          >
            <img src={balaImage1} />
            <img src={balaImage2} />
            <img src={balaImage3} />
            <img src={balaImage4} />
            <img src={balaImage5} />
            <img src={balaImage6} />
            <img src={balaImage7} />
            <img src={balaImage8} />
            <img src={balaImage9} />
            <img src={balaImage10} />
            <img src={balaImage11} />
            <img src={balaImage12} />
            <img src={balaImage13} />
            <img src={balaImage14} />
            <img src={balaImage15} />
            <img src={balaImage16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityGallery;
