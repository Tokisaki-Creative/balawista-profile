import React, { useEffect } from "react";
import { DataSejarahBalawista } from "../constant";

import AOS from "aos";
import "aos/dist/aos.css";

const History = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex justify-center items-center my-32">
      <div className="container">
        <div className="text-center md:text-left">
          <p className="font-semibold text-primary">Sejarah</p>
          <h2 className="mt-1 md:mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">
            Sejarah <span className="text-primary">Balawista</span>
          </h2>
        </div>
        {DataSejarahBalawista.map((history, index) => (
          <div
            className="mx-auto grid grid-cols-1 gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 items-center"
            key={index}
          >
            <p className="mt-6 text-xl leading-8 text-secondary lg:col-span-1  lg:border-b lg:pb-5">
              {history.date}
            </p>
            <p className="mt-6 pb-5 text-xl leading-8 font-normal text-gray-600 lg:col-span-3 border-b">
              {history.events}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
