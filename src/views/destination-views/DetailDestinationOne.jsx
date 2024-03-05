import { EnvironmentFilled, } from "@ant-design/icons"
import coverImage from "../../assets/destination-views/detail-destination/destination-one/cover.png"
import oneImage from "../../assets/destination-views/detail-destination/destination-one/1.png"
import twoImage from "../../assets/destination-views/detail-destination/destination-one/2.png"
import threeImage from "../../assets/destination-views/detail-destination/destination-one/3.png"
import airSuciImage from "../../assets/destination-views/detail-destination/destination-one/air-suci.png"
import ularSuciImage from "../../assets/destination-views/detail-destination/destination-one/ular-suci.png"
import artmarketImage from "../../assets/destination-views/detail-destination/destination-one/art-market.png"
import sunsetImage from "../../assets/destination-views/detail-destination/destination-one/sunset-tanah-lot.png"
import OtherDestination from "./components/OtherDestination"
import SocialMediaShare from "../../components/shared-components/SocialMediaShare"

const DetailArticleOne = () => {
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
                        <h3 className="text-2xl md:text-4xl leading-[150%] font-bold">Destinasi Wisata : Tanah Lot</h3>
                        

                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <img className="h-[200px] md:h-[460px]" src={coverImage} alt="cover-image" />
                                <div className="grid grid-cols-5 md:grid-cols-7 gap-1 md:gap-3">
                                    <img className="h-[50px] md:h-[100px]" src={oneImage} alt="image-1" />
                                    <img className="h-[50px] md:h-[100px]" src={twoImage} alt="image-2" />
                                    <img className="h-[50px] md:h-[100px]" src={threeImage} alt="image-3" />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-4 text-sm md:text-base text-captions">
                                    <p className="leading-6 md:leading-7">Tanah Lot adalah sebuah ikon budaya dan spiritual yang memikat di Pulau Bali, Indonesia. Dengan cakrawala yang luas memeluk senja yang memukau, Tanah Lot menawarkan pengalaman yang tidak terlupakan bagi siapa pun yang mengunjunginya. Dengan tebing karang yang menjulang tinggi di tengah lautan, kuil kuno yang didedikasikan untuk dewa laut, serta gelombang yang gemuruh menyapu pantai, Tanah Lot memancarkan aura mistis yang mampu menyentuh jiwa siapa pun yang datang ke sini.</p>
                                    <p className="leading-6 md:leading-7">Berdiri teguh di atas karang, pura utama Tanah Lot merupakan puncak dari keajaiban arsitektur dan keindahan alam. Ketika matahari terbenam, cahaya emas memancar memperindah siluet kuil, menciptakan pemandangan yang memesona dan memikat hati siapa pun yang menyaksikannya.</p>
                                    <p className="leading-6 md:leading-7">Namun, keindahan Tanah Lot tidak hanya terletak pada panorama alamnya. Di balik setiap batu dan gelombang, terdapat cerita dan kepercayaan yang dalam, memperkaya pengalaman spiritual pengunjung. Kesucian tempat ini telah menginspirasi orang-orang selama berabad-abad, membangkitkan rasa kagum dan kekaguman yang mendalam.</p>
                                    <p className="leading-6 md:leading-7">Dengan segala keajaiban alam dan spiritualnya, Tanah Lot bukan hanya destinasi wisata, tetapi juga sebuah perjalanan spiritual yang memperkaya jiwa dan membangkitkan koneksi dengan alam dan budaya Bali. Bagi siapa pun yang mencari pengalaman yang tak terlupakan dan penghormatan terhadap keajaiban alam, Tanah Lot adalah tempat yang harus dikunjungi.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">Trivia Unik tentang Tanah Lot</h4>
                                    <ol className="list-decimal text-sm md:text-base text-captions pl-4">
                                        <li>Asal Usul Nama: Nama "Tanah Lot" dalam bahasa Indonesia berarti "Tanah di Tengah Laut". Nama ini merujuk pada lokasi kuil yang terletak di atas batu karang di tengah laut.</li>
                                        <li>Kuasa Sang Pendeta: Konon, Tanah Lot didirikan oleh seorang pendeta Hindu pada abad ke-16 yang dikenal sebagai Dang Hyang Nirartha. Legenda menyebutkan bahwa Nirartha menggunakan kekuatan spiritualnya untuk mengusir ular laut yang mengganggu perjalanan laut.</li>
                                        <li>Keunikan Arsitektur: Kuil utama Tanah Lot terletak di atas batu karang dan hanya dapat diakses saat air surut. Arsitektur kuil ini didominasi oleh elemen Hindu yang khas, dengan hiasan-hiasan yang menggambarkan mitologi Hindu.</li>
                                        <li>Air Suci: Air suci dari mata air di dalam gua di Tanah Lot diyakini memiliki kekuatan penyembuhan dan keberkahan. Pengunjung sering kali datang untuk mengambil air suci ini untuk digunakan dalam upacara keagamaan dan ritual penyucian.</li>
                                        <li>Wisatawan dan Ritual: Meskipun menjadi objek wisata utama, Tanah Lot tetap merupakan tempat ibadah yang penting bagi umat Hindu Bali. Setiap hari, ritual keagamaan dilakukan di kuil untuk mempersembahkan puja dan doa kepada dewa laut.</li>
                                        <li>Festival Kesenian: Setiap tahun, Tanah Lot menjadi tuan rumah Festival Kesenian Tanah Lot yang merayakan seni dan budaya Bali melalui pertunjukan tari, musik, dan pameran seni.</li>
                                        <li>Perubahan Bentuk: Erosi pantai yang terus menerus telah menyebabkan perubahan bentuk pada Tanah Lot selama bertahun-tahun. Pada tahun 1980-an, bagian utama dari Tanah Lot mulai terancam runtuh dan harus diperkuat dengan struktur beton untuk menjaga kestabilannya.</li>
                                    </ol>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">Pesona Tanah Lot</h4>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">1. Air suci dan ular suci poleng</h4>
                                    <img className="w-[500px] mx-auto" src={airSuciImage} alt="air-suci-image" />
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Air Suci merupakan salah satu legenda di Tanah Lot karena katanya air suci ini berasal dari tengah laut. Para pengunjung dapat minum air suci tersebut atau hanya mencuci tangan dan wajah yang katanya sangat bermanfaat.</p>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Dipercaya bahwa air suci ini dapat menyembuhkan beberapa penyakit yang diderita. Bahkan bagi mereka yang ingin memiliki anak, dengan meminum air suci ini diyakini akan diberikan seorang anak. Dan banyak yang berdoa untuk keselamatan dan kebahagiaan dalam hidup mereka dari hati yang bersih dan tulus yang semoga semua harapan akan terwujud.</p>
                                    <img className="w-[500px] mx-auto" src={ularSuciImage} alt="ular-suci-image" />
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Masyarakat Bali memuliakan ular suci di Pura Tanah Lot, disebut "poleng". Dua varietas ekor ular suci tersedia: yang belang hitam putih dan yang abu-abu kehitaman, namun yang hitam putih lebih sering muncul.</p>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Dipercaya sebagai perwujudan selendang milik Dang Hyang Nirartha, tokoh penting di balik Pura Tanah Lot. Ular-ular ini menjadi penjaga, memastikan meditasi Nirartha tak terganggu. Dulu, ular suci berkeliaran dalam jumlah besar. Namun, sekarang populasinya menurun. Meski demikian, mereka tidak pernah menyerang kecuali merasa terancam. Ini bukti bahwa mereka ramah dan tidak berbahaya.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">2. Art Market</h4>
                                    <img className="w-[500px] mx-auto" src={artmarketImage} alt="art-market-image" />
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Tanah Lot dilengkapi dengan Pasar Seni untuk semua pengunjung yang ingin membeli hadiah, terutama hadiah seni Bali. Anda dapat memilih banyak jenis hadiah, seperti kemeja, sarung, topi, sandal, merchandise, lukisan, patung, dan hadiah lainnya dengan gaya Bali.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">3. Pemandangan Sunset Yang Indah</h4>
                                    <img className="w-[500px] mx-auto" src={sunsetImage} alt="sunset-image" />
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Sunset Terrace adalah salah satu tempat di area Tanah Lot yang menyediakan setting sempurna untuk menciptakan momen matahari terbenam yang tak terlupakan. Dengan panorama yang indah, Anda dapat menikmati sarapan dan makan siang mewah. Anda bisa bersantai dengan makanan atau minuman favorit Anda sambil menikmati Panorama Pura Tanah Lot ketika air sedang surut.</p>
                                    <p className="leading-6 md:leading-7 text-sm md:text-base text-captions">Tanah Lot Sunset Terrace terletak di utara Pura Tanah Lot, tempat Anda dapat menemukan momen matahari terbenam yang tak terlupakan di Tanah Lot. Jadi, jangan lewatkan kesempatan untuk mengalami keindahan alam yang memukau dan menciptakan kenangan yang abadi di Tanah Lot Sunset Terrace.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <h4 className="font-bold text-xl md:text-2xl">Lokasi Tanah Lot</h4>
                                    <iframe className="w-full h-[240px] md:h-[490px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.7373142502747!2d115.08682414999997!3d-8.621198500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23783cb019389%3A0x256989653f3fd840!2sTanah%20Lot!5e0!3m2!1sen!2sid!4v1709596632770!5m2!1sen!2sid"></iframe>
                                </div>
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
                            <p className="mt-8 text-primary font-bold">Deskripsi</p>
                            <ul className="mt-2 flex flex-col gap-2 text-captions">
                                <li><a href="" className="hover:underline duration-500 transition-all">Trivia Unik Tentang Tanah Lot</a></li>
                                <li>
                                    <a href="" className="hover:underline duration-500 transition-all">Pesona Tanah Lot</a>
                                    <ol type="1" className="mt-2 pl-6 flex flex-col gap-2 text-captions list-decimal">
                                        <li><a href="#1" className="hover:underline duration-500 transition-all">Sunset View</a></li>
                                        <li><a href="#2" className="hover:underline duration-500 transition-all">Art Market</a></li>
                                        <li><a href="#3" className="hover:underline duration-500 transition-all">Sunset View</a></li>
                                    </ol>
                                </li>
                                <li><a href="" className="hover:underline duration-500 transition-all">Lokasi Tanah Lot</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailArticleOne