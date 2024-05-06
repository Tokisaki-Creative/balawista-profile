import { useEffect } from "react";
import informationImage from "../../../assets/landing-views/information/information-image.svg";

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
            <img src="https://source.unsplash.com/bYuI23mnmDQ" />
            <img src="https://source.unsplash.com/Nllx4R-2c3o" />
            <img src="https://source.unsplash.com/lp40q07DIe0" />
            <img src="https://source.unsplash.com/wfalq01jJuU" />
            <img src="https://source.unsplash.com/rMHNK_skwwU" />
            <img src="https://source.unsplash.com/WBMjuGpbrCQ" />
            <img src="https://source.unsplash.com/nCUZ5BYBL_o" />
            <img src="https://source.unsplash.com/3u4fzMQZhjc" />
            <img src="https://source.unsplash.com/haOIqIPSwps" />
            <img src="https://source.unsplash.com/3UrYD7NNVxk" />
            <img src="https://source.unsplash.com/fm1JKDItlVM" />
            <img src="https://source.unsplash.com/qPpq1EVs8vw" />
            <img src="https://source.unsplash.com/xRyL63AwZFE" />
            <img src="https://source.unsplash.com/XeNKWTiCPNw" />
            <img src="https://source.unsplash.com/DFt3T5r_4FE" />
            <img src="https://source.unsplash.com/Ebwp2-6BG8E" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityGallery;
