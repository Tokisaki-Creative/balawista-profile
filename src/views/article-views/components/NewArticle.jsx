import { useEffect } from "react";
import { DataNewArticle } from "../constant"

import AOS from "aos";
import "aos/dist/aos.css";

const NewArticle = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                {/* Title */}
                <div data-AOS="fade-down" data-aos-duration="1200">
                    <h2 className="mt-2 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">Artikel Terbaru</h2>
                </div>

                {/* Content */}
                <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {DataNewArticle.map((items) => (
                    <div data-AOS="fade-up" data-aos-duration={items.duration}>
                        <a href={items.link}>
                            <img className="rounded-t-lg" src={items.image} alt="article-image" />
                        </a>
                        <div className="bg-white shadow-lg p-6 rounded-b-lg">
                            <div className="flex flex-col gap-[10px]">
                                <div className="flex flex-col gap-[6px]">
                                    <div className="flex gap-2 items-center text-captions text-[10px]">
                                        <p>{items.date}</p>
                                        <div className="size-1 bg-captions rounded-full"></div>
                                        <p>{items.admin}</p>
                                    </div>
                                    <p className="text-xs text-[#FA8C16]">{items.type}</p>
                                </div>
                                <h3 className="font-bold">{items.title}</h3>
                                <p className="text-xs font-medium text-captions line-clamp-2">{items.description}</p>
                                <a href={items.link} className="text-[#FA8C16] text-sm font-semibold">Baca selengkapnya..</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewArticle