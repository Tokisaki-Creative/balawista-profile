import { useEffect } from "react";
import { DataDestinations } from "../constant/index"
import { EnvironmentFilled } from "@ant-design/icons"

import AOS from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                <div data-AOS="fade-down" data-aos-duration="1200">
                    <p className="font-semibold text-primary text-base">Pilihan Banyak Orang</p>
                    <h2 className="mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">Destinasi Populer</h2>
                </div>

                <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {DataDestinations.map((items) => (
                    <div data-AOS="fade-down" data-aos-duration={items.duration} key={items.id} className="bg-white rounded-lg p-4 shadow-lg">
                        <a href={items.link}>
                            <img className="rounded-lg h-[152px]" src={items.image} alt={items.title} />
                        </a>
                        <div className="mt-4">
                            <div className="flex gap-2 text-[10px]">
                                <EnvironmentFilled className="text-primary" />
                                <p>{items.location}</p>
                            </div>
                            <div className="flex flex-col gap-1 mt-2">
                                <a href={items.link}>
                                    <h3 className="font-bold">{items.title}</h3>
                                </a>
                                <p className="text-primary text-xs">{items.type}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Destinations