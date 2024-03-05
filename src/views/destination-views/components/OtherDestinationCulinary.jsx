import { DataOtherDestinationCulinary } from "../constant"
import { EnvironmentFilled } from "@ant-design/icons"

const OtherDestinationCulinary = () => {
    return (
        <>
            {DataOtherDestinationCulinary.map((items) => (
                <div key={items.id} className="bg-white rounded-lg p-4 shadow-lg">
                    <a href={items.link}>
                        <img className="rounded-lg h-[152px] w-full" src={items.image} alt={items.title} />
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
        </>
    )
}

export default OtherDestinationCulinary