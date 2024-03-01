import { useEffect } from "react";
import { Flex } from "antd"
import heroImage from "../../../assets/destination-views/hero/hero-image.png"
import { SearchOutlined } from "@ant-design/icons"

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="w-full h-screen">
            <img className="top-0 left-0 w-full h-screen object-cover" src={heroImage} alt="hero-image" />
            <Flex data-AOS="fade-down" data-aos-duration="1600" className="absolute top-0 w-full h-full flex-col justify-center items-center gap-y-4">
                <h1 className="md:max-w-xl text-center text-4xl md:text-5xl font-bold lg:leading-[60px]">
                    Temukan<span className="text-primary"> Destinasi</span> Jelajahi<span className="text-primary"> Pulau Dewata</span>
                </h1>
                <p className=" text-captions text-base md:text-lg text-center">Ketikkan keyword di bawah untuk mencari tempat destinasi terkait!</p>                
                
                
                <form className="md:w-[628px] w-[400px]">
                    <div className="flex">
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <SearchOutlined className="text-lg text-captions" />
                            </div>
                            <input type="text" class="bg-white border border-gray-300 text-secondary text-sm rounded-s-lg focus:ring-primary focus:border-primary focus:outline-none block w-full ps-10 p-2.5" placeholder="Ketik nama destinasi wisata.." required />
                        </div>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xs text-center text-secondary bg-white border border-gray-300 rounded-e-lg focus:outline-none focus:ring-gray-100 border-l-0" type="button">Budaya dan Tradisi <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                        </button>
                    </div>
                </form>

                <div className="hidden lg:flex lg:flex-col lg:gap-y-4 lg:items-center">
                    <div className="flex gap-4 text-center">
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Landmark</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Mall</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Kebun Binatang</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Area Hijau</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Sejarah</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Taman Bermain</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Danau</span>
                    </div>
                    <div className="flex gap-4 text-center">
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Air Terjun</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Pura</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Gunung</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Kesenian</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Pantai</span>
                        <span className="bg-white hover:bg-primary hover:text-white translation-all duration-500 hover:cursor-pointer text-secondary px-4 py-2 border border-gray-300 text-sm rounded-lg">Oleh-Oleh</span>
                    </div>
                </div>
                


            </Flex>
        </section>
    )
}

export default Hero