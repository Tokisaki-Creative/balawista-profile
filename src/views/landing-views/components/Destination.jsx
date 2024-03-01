import { useState, useRef, useEffect } from "react";
import { Flex, Drawer } from "antd";
import { LeftCircleOutlined, RightCircleOutlined, EnvironmentFilled, RightOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { DataDestination } from "../constant";

import AOS from "aos";
import "aos/dist/aos.css";

const Destination = () => {
    useEffect(() => {
        AOS.init();
    }, []);


    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
    });

    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };
  
    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const onSlideChange = (swiper) => {
        handleSlideByState({
           isFirst: swiper.isBeginning,
           isLast: swiper.isEnd,
        });
    };

    const { isLast, isFirst } = slideBegOrNot;

    return (
        <section className="my-32">
            <div className="container">
                {/* Title */}
                <Flex data-AOS="fade-down" data-aos-duration="1200" className="flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div>
                        <span className="font-semibold text-primary">Destinasi Wisata</span>
                        <div className="mt-[10px] flex gap-2.5 items-center">
                            <span className="text-2xl md:text-[32px]">✨</span>
                            <span className="size-2.5 md:size-3 bg-secondary rounded-full"></span>
                            <h2 className="mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold text-secondary max-w-xs md:max-w-full">Jelajahi Keberagaman <span className="text-primary">Pulau bali</span></h2>
                        </div>
                    </div>
                    <Flex className="mt-4 lg:mt-0 gap-2 md:gap-4">
                        <LeftCircleOutlined onClick={handlePrev} className={`Arrow text-4xl md:text-5xl ${isFirst ? 'disabled text-gray-300' : 'text-primary'}`} />
                        <RightCircleOutlined onClick={handleNext} className={`Arrow text-4xl md:text-5xl ${isLast ? 'disabled text-gray-300' : 'text-primary'}`}/>
                    </Flex>
                </Flex>

                {/* Cards */}
                <Flex data-AOS="fade-up" data-aos-duration="1200" className="mt-8 items-center justify-center">
                    <Swiper breakpoints={{
                     0: {
                        slidesPerView: 1,
                     },
                    768: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: 4
                    }
                  }} pagination={{
                     el: '.swiper-paginations',
                     type: 'fraction',
                  }} modules={[Pagination, Navigation]} spaceBetween={32} ref={SlideRef} onSlideChange={onSlideChange} navigation={false} className="w-72 h-96 md:w-[576px] lg:w-full">
                        {DataDestination.map((items) => (
                        <SwiperSlide key={items.id} className="group rounded-lg relative items-center justify-center overflow-hidden cursor-pointer">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={items.image} alt="destination-image" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col justify-center px-4 transition-all duration-500 group-hover:translate-y-0">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{items.name}</h3>
                                    <div className="flex items-center justify-between">

                                        {items.type == "info" ? (
                                        <div className="text-white flex gap-2 items-center">
                                            <InfoCircleOutlined className="text-sm" />
                                            <p className="text-xs">{items.location}</p>
                                        </div>
                                        ) : (
                                        <div className="text-white flex gap-2 items-center">
                                            <EnvironmentFilled className="text-sm" />
                                            <p className="text-xs">{items.location}</p>
                                        </div>

                                        )}
                                        <div className="text-white flex gap-1 items-center hover:text-primary">
                                            <a href="#" className="text-xs hover:text-primary">Selengkapnya</a>
                                            <RightOutlined className="text-[10px] hover:text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-16 md:mb-12 lg:mb-14 mt-2 line-clamp-3 md:line-clamp-4 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{items.description}</p>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </Flex>
            </div>
        </section>
    )
}

export default Destination