import { DataNewArticle } from "../constant"

const OtherArticle = () => {
    return (
        <>
            {DataNewArticle.map((items) => (
            <div>
                <a href={items.link}>
                    <img className="rounded-t-lg" src={items.image} alt="article-image" />
                </a>
                <div className="bg-white shadow-lg p-4 md:p-6 rounded-b-lg">
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col gap-[6px]">
                            <div className="flex gap-2 items-center text-captions text-[8px] md:text-[10px]">
                                <p>{items.date}</p>
                                <div className="size-1 bg-captions rounded-full"></div>
                                <p>{items.admin}</p>
                            </div>
                            <p className="text-[8px] md:text-[10px] text-[#FA8C16]">{items.type}</p>
                        </div>
                        <h3 className="font-bold text-[10px] md:text-xs">{items.title}</h3>
                        <p className="text-[8px] md:text-[10px] font-medium text-captions line-clamp-2">{items.description}</p>
                        <a href={items.link} className="text-[#FA8C16] text-[8px] md:text-[10px] font-semibold">Baca selengkapnya..</a>
                    </div>
                </div>
            </div>            
            ))}
        </>
    )
}

export default OtherArticle