import { useEffect } from "react";
import { Flex } from "antd";
import quoteImage from "../../../assets/landing-views/testimonials/quote.png";
import arrowIcon from "../../../assets/general/icon-circle-arrow.svg";
import { InstagramFilled } from "@ant-design/icons";
import { DataTestimonial } from "../constant";

import AOS from "aos";
import "aos/dist/aos.css";
import ArrowIcon from "../../../components/shared-components/ArrowIcon";

const TentangBalawista = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="my-32">
      <div className="bg-[url('https://images.unsplash.com/photo-1594047109626-acbf01fd36ad?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full bg-cover bg-center p-10">
        <div className="container my-8">
          <div
            data-Aos="fade-down"
            data-aos-duration="1200"
            className="text-left text-white"
          >
            <p className="font-semibold text-2xl">Tentang Balawista</p>
            <h2 className="mt-8 md:mt-12 text-3xl md:text-[40px] font-regular md:leading-[130%] max-w-4xl">
              From <span className="font-bold">lifeguard</span> to the{" "}
              <span className="font-bold">dolphin viewing,</span>
              <br /> we are setting up business in the <br />
              realm of <span className="font-bold">Tourism.</span>
            </h2>
            <div className="mt-8 md:mt-12">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangBalawista;
