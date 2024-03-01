import { useEffect } from "react";
import { InstagramFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons"
import { DataProfileTeam } from "../constant"

import AOS from "aos";
import "aos/dist/aos.css";

const ProfileTeam = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                <div data-AOS="fade-down" data-aos-duration="1200" className="text-center">
                    <p className="font-semibold text-primary text-base">Profil Tim</p>
                    <h2 className="mt-1 md:mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">Tim Perbekel Lovina</h2>
                </div>
                <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center max-w-60 md:max-w-5xl mx-auto gap-8 md:gap-16">
                    {DataProfileTeam.map((items) => (
                    <div data-AOS="fade-up" data-aos-duration={items.duration} className="flex flex-col gap-6">
                        <img src={items.image} alt="profile-image" />
                        <div className="flex flex-col gap-2 text-center">
                            <p className="font-semibold">{items.name}</p>
                            <p className="text-captions text-xs">{items.role}</p>
                            <div className="flex text-xl text-primary gap-2 mx-auto">
                                <a href={items.link[0]}>
                                    <InstagramFilled />
                                </a>
                                <a href={items.link[1]}>
                                    <FacebookFilled />
                                </a>
                                <a href={items.link[1]}>
                                    <LinkedinFilled />
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfileTeam