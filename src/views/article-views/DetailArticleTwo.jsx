import { EnvironmentFilled, FacebookFilled, TwitterCircleFilled, LinkedinFilled, InstagramFilled  } from "@ant-design/icons"
import coverImage from "../../assets/article-views/detail-article/article-two/cover.png"
import oneImage from "../../assets/article-views/detail-article/article-two/1.png"
import twoImage from "../../assets/article-views/detail-article/article-two/2.png"
import threeImage from "../../assets/article-views/detail-article/article-two/3.png"
import fourImage from "../../assets/article-views/detail-article/article-two/4.png"
import fiveImage from "../../assets/article-views/detail-article/article-two/5.png"
import sixImage from "../../assets/article-views/detail-article/article-two/6.png"
import sevenImage from "../../assets/article-views/detail-article/article-two/7.png"
import eightImage from "../../assets/article-views/detail-article/article-two/8.png"
import nineImage from "../../assets/article-views/detail-article/article-two/9.png"
import tenImage from "../../assets/article-views/detail-article/article-two/10.png"
import { DataNewArticle } from "./constant"
import SocialMediaShare from "../../components/shared-components/SocialMediaShare"
import OtherArticle from "./components/OtherArticle"

const DetailArticleTwo = () => {
    return (
        <section className="my-32">
            <div className="container">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
                    <div className="order-2 lg:order-1 col-span-4 lg:col-span-9 flex flex-col gap-4 md:gap-9">
                        <h3 className="text-2xl md:text-4xl leading-[150%] font-bold">Buat Kencanmu Tak Terlupakan dengan 10 Spot Wisata Couple Terfavorit di Bali!</h3>
                        <div className="flex gap-4 text-captions text-xs md:text-lg font-semibold items-center">
                            <p>Oleh Admin Perbekel Cemagi</p>
                            <span>|</span>
                            <div className="flex gap-2 items-center">
                                <EnvironmentFilled />
                                <p>Rabu, 27 Desember 2024</p>
                            </div>
                        </div>
                        

                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <img className="h-[200px] md:h-[460px]" src={coverImage} alt="cover-image" />
                            </div>
                            <div>
                                <div className="flex flex-col gap-4 text-sm md:text-base text-captions leading-[180%]">
                                    <p className="leading-6 md:leading-7">Bali bukan hanya destinasi liburan solo atau bersama keluarga, tetapi juga merupakan tempat yang romantis bagi pasangan yang ingin merayakan cinta mereka. Dengan pemandangan alam yang memukau, restoran yang romantis, dan aktivitas seru, Bali menawarkan berbagai spot wisata yang sempurna untuk kencan bersama pasanganmu. Ingin tahu di mana tempat-tempat tersebut? Simak daftar 10 spot wisata couple terfavorit di Bali berikut ini!</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={oneImage} alt="image-1" />
                                    <h4 className="font-bold text-xl md:text-2xl">1. Pantai Tegal Wangi</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Pantai Tegal Wangi  terletak di Jimbaran, Kabupaten Badung, Bali. Lokasinya yang tersembunyi dan eksotis cocok jadi tempat menyaksikan matahari terbenam (sunset) bersama pasanganmu. Pantai ini tersembunyi di antara tebing-tebing kecil, menciptakan suasana yang intim dan romantis.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={twoImage} alt="image-2" />
                                    <h4 className="font-bold text-xl md:text-2xl">2. Pura Tanah Lot</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Matahari di Bali bisa sangat terik, jadi pastikan kamu membawa perlindungan matahari yang memadai. Sunblock dengan SPF tinggi, topi atau payung pantai, serta kacamata hitam adalah perlengkapan wajib untuk melindungi kulit dan mata dari sinar UV yang berbahaya. Dengan perlindungan ini, kamu bisa menikmati keindahan Bali tanpa khawatir terbakar sinar matahari.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={threeImage} alt="image-3" />
                                    <h4 className="font-bold text-xl md:text-2xl">3. Taman Air Panas Air Sanih</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Air sanih merupakan kolam renang dengan mata air alami yang terletak di Desa Sanih, Kubutambahan, Singaraja. Air panasnya sangat bagus untuk merilekskan tubuh. Berendam di air panas bersama pasanganmu di Taman Air Panas Air Sanih bisa menjadi pengalaman yang romantis dan menyegarkan. Airnya yang jernih dan alam sekitarnya yang hijau akan membuat kencanmu semakin berkesan.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={fourImage} alt="image-4" />
                                    <h4 className="font-bold text-xl md:text-2xl">4. Sawah Tegalalang</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Sawah Terasering Tegallang atau yang juga populer dengan sebutan Tegallalang Rice Terrace terletak di kecamatan Tegallalang, Kabupaten Gianyar. Sawah super instagrammable ini merupakan undakan sawah yang disusun mengikuti sistem irigasi tradisional Bali yang disebut "subak.".Nikmati keindahan sawah terasering di Tegalalang sambil berjalan-jalan bersama pasanganmu. Jangan lupa untuk mengabadikan momen romantismu di antara pemandangan alam yang memukau ini.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={fiveImage} alt="image-5" />
                                    <h4 className="font-bold text-xl md:text-2xl">5. Museum Seni Neka</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Museum Seni Neka atau Neka Art Museum adalah sebuah museum seni lukis dan keris yang berlokasi di Ubud. Jika kamu dan pasanganmu adalah penggemar seni, jangan lewatkan untuk mengunjungi Museum Seni Neka. Anda bisa bersama-sama mengagumi karya seni lokal dan internasional yang memukau.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={sixImage} alt="image-6" />
                                    <h4 className="font-bold text-xl md:text-2xl">6. Jalan Jalan Di Desa Penglipuran</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Desa Penglipuran adalah lokasi atau tempat wisata di Bali yang sangat unik dan menarik. Berada di Kabupaten Bangli, dimana salah satu kabupaten di Bali yang terletak pada posisi tengah-tengah Pulau Bali. Sebagai salah satu desa adat tercantik di Bali, kamu tidak dapat melewatkan untuk menikmati suasana pedesaan yang tenang sambil berjalan-jalan bersama pasanganmu di tengah rumah-rumah tradisional dan kebun-kebun yang hijau.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={sevenImage} alt="image-7" />
                                    <h4 className="font-bold text-xl md:text-2xl">7. The Blooms Garden Bedugul</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">The Blooms Garden Bedugul adalah salah satu spot romantis yang tak boleh dilewatkan di Bali. Terletak di daerah Bedugul, taman bunga ini memikat hati pengunjung dengan pesonanya yang memukau. Berbagai jenis bunga berwarna-warni, mulai dari mawar, lavender, hingga tulip, menambah keindahan tempat ini, bergantung pada musimnya. Selain menjadi saksi kecantikan bunga-bunga, pengunjung juga dapat menikmati suasana tenang taman yang hijau serta udara segar pegunungan Bedugul. The Blooms Garden Bedugul bukan hanya tempat untuk berfoto indah, tetapi juga menjadi tempat yang sempurna untuk menghabiskan waktu bersama pasangan atau keluarga dalam suasana yang romantis dan menawan.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={eightImage} alt="image-8" />
                                    <h4 className="font-bold text-xl md:text-2xl">8. Ngopi Santai Di Kintamani</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Menikmati secangkir kopi di Kintamani adalah pengalaman yang menenangkan dan memikat. Dengan latar belakang Gunung Batur yang megah dan danau yang menakjubkan, tempat ini menjadi surga bagi pecinta kopi dan alam. Nikmati aroma kopi yang harum sambil memandang pemandangan yang memesona, membuat setiap tegukan menjadi lebih nikmat. Tempat ini cocok untuk menghabiskan waktu santai sambil menikmati keindahan alam Bali yang memukau.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={nineImage} alt="image-9" />
                                    <h4 className="font-bold text-xl md:text-2xl">9. Bali Safari and Marine Park</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Bali Safari and Marine Park adalah destinasi yang sempurna untuk petualangan yang mengesankan di Bali. Dengan luas lebih dari 40 hektar, taman ini menawarkan pengalaman mendebarkan melihat satwa liar yang mengagumkan dari berbagai belahan dunia. Pengunjung dapat melakukan safari melalui habitat yang dirancang menyerupai habitat asli hewan-hewan tersebut. Selain itu, taman ini juga menawarkan pertunjukan menarik, seperti pertunjukan lumba-lumba dan gajah. Tidak hanya itu, Bali Safari and Marine Park juga memiliki Marine Park yang menampilkan berbagai atraksi dari dunia bawah laut. Tempat ini cocok untuk dikunjungi bersama keluarga atau pasangan untuk menciptakan kenangan tak terlupakan di Bali.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    <img className="w-[475px]" src={tenImage} alt="image-10" />
                                    <h4 className="font-bold text-xl md:text-2xl">10. Makan Malam Romantis di Jimbaran</h4>
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Jimbaran terkenal dengan restoran-restoran seafood di pinggir pantainya yang menawarkan makan malam romantis di tepi pantai. Nikmati hidangan lezat sambil menyaksikan matahari terbenam di horison.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 md:gap-6">
                                    {/* <h4 className="font-bold text-3xl">6. Uang Tunai dan Kartu Kredit</h4> */}
                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-captions">Dengan tempat-tempat wisata couple yang menakjubkan ini, kamu dan pasanganmu akan memiliki kencan yang tak terlupakan di Pulau Dewata. Semua informasi tentang tempat-tempat tersebut dapat kamu temukan dalam menu Destinasi di Pesona Dewata.  Jangan lupa untuk menikmati setiap momen bersama dan menciptakan kenangan indah selama liburan romantismu di Bali!</p>
                                </div>
                            </div>
                            

                        </div>

                        <SocialMediaShare />

                        <div>
                            <div>
                                <h2 className="mt-2 text-xl md:text-2xl font-extrabold text-secondary">Baca Artikel Lainnya:</h2>
                            </div>
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <OtherArticle />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hidden md:block col-span-4 lg:col-span-3">
                        <div className="bg-white p-6 shadow-lg">
                            <p className="text-lg font-bold">Table of Content</p>
                            <p className="mt-8 text-primary font-bold">Overview</p>
                            <ol type="1" className="mt-2 pl-4 flex flex-col gap-2 text-captions list-decimal">
                                <li><a href="#1" className="hover:underline duration-500 transition-all">Pantai Tegal Wangi</a></li>
                                <li><a href="#2" className="hover:underline duration-500 transition-all">Pura Tanah Lot</a></li>
                                <li><a href="#3" className="hover:underline duration-500 transition-all">Taman Air Panas Air Sanih</a></li>
                                <li><a href="#4" className="hover:underline duration-500 transition-all">Sawah Tegalalang</a></li>
                                <li><a href="#5" className="hover:underline duration-500 transition-all">Museum Seni Neka</a></li>
                                <li><a href="#6" className="hover:underline duration-500 transition-all">Jalan Jalan Di Desa Penglipuran</a></li>
                                <li><a href="#7" className="hover:underline duration-500 transition-all">The Blooms Garden Bedugul</a></li>
                                <li><a href="#8" className="hover:underline duration-500 transition-all">Ngopi Santai Di Kintamani</a></li>
                                <li><a href="#9" className="hover:underline duration-500 transition-all">Bali Safari and Marine Park</a></li>
                                <li><a href="#10" className="hover:underline duration-500 transition-all">Makan Malam Romantis di Jimbaran</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailArticleTwo