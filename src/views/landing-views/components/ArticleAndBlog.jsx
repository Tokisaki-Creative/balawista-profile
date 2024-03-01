import { useEffect } from "react"
import { RightOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { DataArticleAndBlog } from "../constant"

import AOS from "aos";
import "aos/dist/aos.css";

const ArticleAndBlog = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-20">
            <div className="container">
                <Flex data-AOS="fade-down" data-aos-duration="1200"  className="flex-col lg:flex-row lg:justify-between lg:items-end">
                    <div>
                        <span className="font-semibold text-primary">Artikel & Blog</span>
                        <div className="mt-[10px] flex gap-2.5 items-center">
                            <span className="text-2xl md:text-[32px]">✨</span>
                            <span className="size-2.5 md:size-3 bg-secondary rounded-full"></span>
                            <h2 className="mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold text-secondary">Dapatkan Informasi & Fakta Seru Lainnya</h2>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <a href="/artikel" className="flex gap-2 text-primary hover:text-primary items-center text-sm md:text-base">
                            Lihat Semua
                            <RightOutlined className="text-primary text-xs md:text-sm" />
                        </a>
                    </div>
                </Flex>

                {/* Cards */}
                <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DataArticleAndBlog.map((items) => (
                    <div data-Aos="fade-up" data-aos-duration={items.duration} >
                        <a href={items.link}>
                            <img className="w-full h-[200px] rounded-t-lg" src={items.image} alt="article-image" />
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

export default ArticleAndBlog