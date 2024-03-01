import mapsImage from "../../../assets/landing-views/maps/maps.png"
import { EnvironmentFilled, HeartFilled, SmileFilled } from "@ant-design/icons"

const Maps = () => {
    return (
        <section className="my-20">
            <div className="container">
                {/* Title */}
                <div className="text-center">
                    <p className="tracking-widest font-extrabold text-primary text-base lg:text-lg">CARI TEMPAT WISATA</p>
                    <h2 className="mt-2 lg:mt-4 text-4xl lg:text-5xl font-extrabold text-secondary">Cari Tempat Wisata Didekatmu</h2>
                    <p className="text-captions mt-4 lg:max-w-2xl text-base lg:text-lg mx-auto">Kamu dapat mencari tempat wisata atau tempat yang sedang populer di Bali dengan cepat dan tepat👍🏻</p>
                </div>

                {/* Image */}
                <div className="mt-8">
                    <img className="shadow-lg rounded-lg" src={mapsImage} alt="" />
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full p-6 flex items-center justify-center">
                            <EnvironmentFilled className="text-2xl text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold text-secondary">Populer di dekatmu</h3>
                            <p className="text-captions">Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full p-6 flex items-center justify-center">
                            <HeartFilled className="text-2xl text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold text-secondary">Populer di dekatmu</h3>
                            <p className="text-captions">Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full p-6 flex items-center justify-center">
                            <SmileFilled className="text-2xl text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold text-secondary">Populer di dekatmu</h3>
                            <p className="text-captions">Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maps