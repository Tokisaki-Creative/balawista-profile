import { EnvironmentFilled, } from "@ant-design/icons"
import coverImage from "../../assets/destination-views/detail-destination/destination-two/cover.png"
import OtherDestination from "./components/OtherDestination"
import OtherDestinationCulinary from "./components/OtherDestinationCulinary"
import SocialMediaShare from "../../components/shared-components/SocialMediaShare"

const DetailArticleTwo = () => {
    return (
        <section className="my-32">
            <div className="container">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
                    <div className="order-2 lg:order-1 col-span-4 lg:col-span-9 flex flex-col gap-4 md:gap-9">
                        <div className="flex gap-4 text-captions text-xs md:text-lg font-semibold items-center">
                            <p>Oleh Admin Perbekel Cemagi</p>
                            <span>|</span>
                            <div className="flex gap-2 items-center">
                                <EnvironmentFilled />
                                <p>Rabu, 27 Desember 2024</p>
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl leading-[150%] font-bold">Destinasi Kuliner : Babi Guling</h3>
                        

                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <img className="h-[200px] md:h-[460px]" src={coverImage} alt="cover-image" />
                                <div className="grid grid-cols-5 md:grid-cols-7 gap-1 md:gap-3">
                                    <img className="h-[50px] md:h-[100px]" src={coverImage} alt="image-1" />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">Trivia Unik tentang Babi Guling</h4>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Babi sudah lama menjadi salah satu sumber protein hewani bagi masyarakat Indonesia. Menurut sejarawan, Anthony Reid, babi menjadi pengalih makanan yang paling efisien dari padi-padian ke daging.</p>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Berdasarkan prasasti masa Hindu-Budha tercatat bahwa babi termasuk daging yang sering dikonsumsi. Babi ternak dikenal dengan sebutan celeng, sedangkan babi hutan disebut wok. Selain itu, babi juga merupakan salah satu makanan yang disajikan di keraton Majapahit.</p>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Didominasi oleh umat Hindu, tidak heran jika masyarakat Bali sering makan daging babi. Makanan ini adalah salah satu bagian dari tradisi, yang juga berguna untuk memperkuat keyakinan agama masyarakat Bali. Itulah mengapa Babi Guling dijadikan sesaji dalam perayaan adat. Makanan ini dimaknai sebagai simbol memohon berkah, pembawa kemakmuran, dan juga sebagai salah satu wujud syukur kepada Tuhan.</p>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Makna Penyajian Babi Guling: Setiap cara penyajian Babi Guling ada maknanya. Misalnya pada mulut Babi Guling yang digunakan sebagai sesaji diisi dengan daun pisang dan pada lubang anusnya diisi nasi. Hal ini memiliki makna bahwa dari sesuatu yang sederhana akan menjadi hal yang bermanfaat. Kemudian bagian perut Babi Guling akan diikat serta lehernya dikalungi janur dan digantungi uang kepeng dua keping, yang bermakna ketulusan dan keikhlasan.</p>
                                </div>
                            </div>
                            

                        </div>

                        <div>
                            <div>
                                <h2 className="mt-2 text-xl md:text-2xl font-extrabold text-secondary">Rekomendasi Tempat Makan:</h2>
                            </div>
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <OtherDestinationCulinary />
                            </div>
                        </div>
                        
                        <SocialMediaShare />

                        <div>
                            <div>
                                <h2 className="mt-2 text-xl md:text-2xl font-extrabold text-secondary">Kunjungi Destinasi Lainnya:</h2>
                            </div>
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <OtherDestination />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hidden md:block col-span-4 lg:col-span-3">
                        <div className="bg-white p-6 shadow-lg">
                            <p className="text-lg font-bold">Table of Content</p>
                            <p className="mt-8 text-primary font-bold">Trivia Unik</p>
                            <ul className="mt-2 flex flex-col gap-2 text-captions">
                                <li><a href="" className="hover:underline duration-500 transition-all">Rekomendasi Tempat Makan</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailArticleTwo