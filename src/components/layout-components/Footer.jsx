import {
  InstagramFilled,
  FacebookFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container py-8">
        <div className="flex flex-col gap-5 items-center text-center">
          {/* <h3 className="text-4xl font-indo">pesona dewata</h3> */}
          <img src={`/balawista-putih.svg`} alt="" className="h-12" />
          <p className="text-xs leading-[150%] max-w-sm">
            “From lifeguard to the dolphin viewing, we are setting up business
            in the realm of Tourism.”
          </p>
          <ul className="flex gap-4 text-xs md:text-sm leading-[150%]">
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/kegiatan">Kegiatan</a>
            </li>
            <li>
              <a href="/tentang-kami">Tentang Kami</a>
            </li>
          </ul>
        </div>
        <div className="my-6 border border-white w-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4">
          <div className="flex gap-4">
            <a href="">
              <InstagramFilled className="text-xl md:text-2xl" />
            </a>
            <a href="">
              <YoutubeFilled className="text-xl md:text-2xl" />
            </a>
            <a href="">
              <FacebookFilled className="text-xl md:text-2xl" />
            </a>
          </div>
          <div>
            <p className="text-xs md:text-sm text-center max-w-[280px] md:max-w-full">
              ©<span className="font-bold">Balawista Buleleng</span> All Rights
              Reserved. Website by Tim Perbekel Lovina.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
