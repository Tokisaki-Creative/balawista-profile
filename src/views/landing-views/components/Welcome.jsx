import { useEffect } from "react"

import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="my-32">
            <div className="container">
                {/* Title */}
                <div data-AOS="fade-down" data-aos-duration="1200" className="text-center">
                    <p className="font-semibold text-primary text-base">Selamat Datang</p>
                    <h2 className="mt-2 md:mt-4 text-2xl md:text-[32px] font-extrabold text-secondary">Nikmati Keindahan <span className="text-primary">Pulau bali</span></h2>
                </div>

                <div data-AOS="fade-up" data-aos-duration="1200" className="mt-4 md:mt-8">
                    <iframe className="mx-auto w-full h-[220px] md:h-[400px] lg:w-[928px] lg:h-[522px]" src="https://www.youtube.com/embed/LQV_tnt7wvA" title="Bali in 8K | HDR FUHD | Asia Traveler Stories" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Welcome