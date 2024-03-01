import { useEffect } from "react";
import { Flex } from "antd"
import followUsImage from "../../../assets/landing-views/follow-us/follow-us-image.png"
import { InstagramFilled, FacebookFilled, YoutubeFilled } from "@ant-design/icons"

import AOS from "aos";
import "aos/dist/aos.css";

const FollowUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                <Flex data-Aos="fade-right" data-aos-duration="1200" className="items-center justify-center gap-12 lg:gap-24">
                    {/* Title */}
                    <div className="hidden md:block">
                        <img src={followUsImage} alt="" />
                    </div>
                    <div data-Aos="fade-left" data-aos-duration="1200" className="text-center md:text-left">
                        <p className="font-semibold text-primary text-base">Ikuti Kami</p>
                        <h2 className="max-w-sm mx-auto mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">Dapatkan Informasi Terkini Wisata <span className="text-primary">Pulau Bali</span></h2>
                        <Flex className="flex-col gap-4 mt-8 items-center md:items-start">
                            <div className="flex gap-2 items-center">
                                <div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg">
                                    <InstagramFilled className="text-xl" />
                                </div>
                                <p className="font-semibold text-primary">@pesonadewata.bali</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg">
                                    <FacebookFilled  className="text-xl" />
                                </div>
                                <p className="font-semibold text-primary">@pesonadewata.bali</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg">
                                    <YoutubeFilled className="text-xl" />
                                </div>
                                <p className="font-semibold text-primary">@pesonadewata.bali</p>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </section>
    )
}

export default FollowUs