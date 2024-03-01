import { useEffect } from "react";
import informationImage from "../../../assets/landing-views/information/information-image.svg"

import AOS from "aos";
import "aos/dist/aos.css";

const Information = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                {/* Title */}
                <div data-AOS="fade-down" data-aos-duration="1200" className="text-center">
                    <p className="font-semibold text-primary text-base">For Your Information</p>
                    <h2 className="max-w-sm mx-auto mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold text-secondary leading-8 md:leading-10">Tips Buat Kamu yang mau <span className="text-primary">Liburan</span> ke <span className="text-primary">Bali</span></h2>
                </div>

                {/* Content */}
                <div className="mt-4 md:mt-8 flex items-center justify-between">
                    <div className="flex flex-col gap-4 md:gap-10 mx-auto md:m-0">
                        {/* First */}
                        <div data-AOS="fade-right" data-aos-duration="1200" className="flex gap-5">
                            <div className="bg-[#DBEFED] p-4 size-10 md:size-14 flex items-center justify-center rounded-xl">
                                <span className="text-xl md:text-2xl">🔎</span>
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-primary">Cari tempat yang kamu mau</h3>
                                <p className="max-w-[300px] md:max-w-md text-sm md:text-lg">Tentukan pilihan destinasi kamu melalui halaman <span className="text-primary font-bold">Destinasi</span></p>
                            </div>
                        </div>
                        
                        {/* Second */}
                        <div data-AOS="fade-right" data-aos-duration="1400" className="flex gap-5">
                            <div className="bg-[#DBEFED] p-4 size-10 md:size-14 flex items-center justify-center rounded-xl">
                                <span className="text-xl md:text-2xl">📝</span>
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-primary">Booking Tiket Perjalanan</h3>
                                <p className="max-w-[300px] md:max-w-md text-sm md:text-lg">Setelah kamu tahu destinasimu, segera booking tiket di platform kesayanganmu!</p>
                            </div>
                        </div>

                        {/* Third */}
                        <div data-AOS="fade-right" data-aos-duration="1600" className="flex gap-5">
                            <div className="bg-[#DBEFED] p-4 size-10 md:size-14 flex items-center justify-center rounded-xl">
                                <span className="text-xl md:text-2xl">😍</span>
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-primary">Ajak Pasangan Kamu</h3>
                                <p className="max-w-[300px] md:max-w-md text-sm md:text-lg"><span className="text-primary font-bold">Lebih ramai lebih asik! </span>Jadi jangan lupa ajak kerabat, pasangan, atau keluarga kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div data-AOS="fade-left" data-aos-duration="1200" className="hidden md:block">
                        <img src={informationImage} alt="information-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information