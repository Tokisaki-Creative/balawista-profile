import { useEffect } from "react";
import { DataKegiatan } from "../constant";

import AOS from "aos";
import "aos/dist/aos.css";
import ArrowIcon from "../../../components/shared-components/ArrowIcon";

const ActivityList = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="my-32">
      <div className="container">
        <div className="flex flex-col">
          {DataKegiatan.map((kegiatan) => (
            <a
              href={kegiatan.href}
              key={kegiatan.id}
              className="relative group"
            >
              <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-12 py-12 z-10">
                  <div className="col-span-1 uppercase text-4xl font-bold text-[#C3C3C3]">
                    0{kegiatan.id}
                  </div>
                  <div className="col-span-8 flex flex-col">
                    <p className="text-5xl lg:text-5xl font-bold text-secondary">
                      {kegiatan.title}
                    </p>
                    <div
                      className={`mt-9 text-2xl leading-8 font-semibold ${
                        kegiatan.id % 2 == 1 ? "text-primary2" : "text-primary"
                      }`}
                    >
                      {kegiatan.subtitle}
                    </div>
                    <div className="mt-6 text-md leading-8 font-semibold text-gray-400">
                      {kegiatan.desc}
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-row items-start justify-end">
                    <ArrowIcon
                      color={`${kegiatan.id % 2 == 1 ? "yellow" : "red"}`}
                    />
                  </div>
                </div>
                <div className="absolute mt-10 right-20 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-35">
                  <img
                    src={kegiatan.imageSrc}
                    alt="test"
                    width={350}
                    height={300}
                    className="rounded-xl shadow-lg grayscale"
                  />
                </div>
                <div className="border-b border-gray-300 py-2"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityList;
