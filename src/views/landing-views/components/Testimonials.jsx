import { useEffect } from "react"
import { Flex } from "antd"
import quoteImage from "../../../assets/landing-views/testimonials/quote.png"
import { InstagramFilled } from "@ant-design/icons"
import { DataTestimonial } from "../constant"

import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="bg-[url('https://images.unsplash.com/photo-1594047109626-acbf01fd36ad?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[520px] w-full bg-cover bg-center p-10">
                <div className="container">
                    <div data-Aos="fade-down" data-aos-duration="1200" className="text-center text-white">
                        <p className="font-semibold text-base">Selamat Datang</p>
                        <h2 className="mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold max-w-md md:leading-10 mx-auto">Bagikan Pengalaman Kamu Selama Liburan di Bali</h2>
                    </div>
                    <div className="mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {DataTestimonial.map((items) => (
                        <div data-AOS="fade-up" data-aos-duration={items.duration}  className={`flex flex-col gap-8 items-center ${items.id > 1 ? 'hidden md:flex' : ''}`}>
                            <div className="bg-white h-[192px] p-8 rounded-lg m-auto">
                                <img src={quoteImage} alt="quote-image" />
                                <p className="mt-2 text-sm font-light text-captions leading-5">{items.comment}</p>
                            </div>
                            <div className="flex gap-4">
                                <img className="size-14 rounded-full" src={items.image} alt="testimonial-image" />
                                <div className="flex flex-col">
                                    <h3 className="text-white text-lg font-semibold">{items.name}</h3>
                                    <div className="flex items-center gap-1 text-white">
                                        <InstagramFilled className="text-xl" />
                                        <p className="text-sm">{items.ig}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials