import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const KamiAdalahBalawista = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex justify-center items-center my-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
          <img
            data-AOS="fade-right"
            data-aos-duration="1200"
            className="w-3/5 md:w-full mx-auto"
            src=""
            alt="hero-image"
          />
          <div data-AOS="fade-left" data-aos-duration="1200">
            <div className="text-center md:text-left">
              <p className="font-semibold text-primary">Tentang Kami</p>
              <h2 className="mt-1 md:mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">
                Kami Adalah <span className="text-primary">Balawista</span>
              </h2>
            </div>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet ultrices eros. Maecenas sed velit quam. Vestibulum porttitor
              ac tellus vitae fringilla. Sed tristique lacus quis interdum
              vulputate. Fusce convallis velit purus, vitae ornare urna cursus
              id. Nunc ut arcu aliquam, rutrum mauris et, viverra magna. Aenean
              ut ex augue. Sed mollis at est eget vestibulum. Mauris ac justo
              augue.
            </p>
            <p className="mt-2 md:mt-4 text-captions leading-6 text-justify text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet ultrices eros. Maecenas sed velit quam. Vestibulum porttitor
              ac tellus vitae fringilla. Sed tristique lacus quis interdum
              vulputate. Fusce convallis velit purus, vitae ornare urna cursus
              id. Nunc ut arcu aliquam, rutrum mauris et, viverra magna. Aenean
              ut ex augue. Sed mollis at est eget vestibulum. Mauris ac justo
              augue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KamiAdalahBalawista;
