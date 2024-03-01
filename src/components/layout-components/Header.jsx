import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Flex, Drawer } from "antd";

const Header = () => {
    let {pathname} = useLocation();
    let subpage = pathname.split('/')?.[1];

    console.log(subpage)

    function Linkness (type = null) {
        let classes = "md:text-sm lg:text-base hover:text-primary transition-all duration-500"

        if (type === subpage) {
            classes += " text-primary font-bold ${color}"
        } else {
            classes += ` ${color} font-medium`
        }
        return classes;
    }

    function underlineNav (type = null) {
        let underlines = ""
        if  (type === subpage) {
            underlines += " border-2 border-primary rounded-t-full"
        } else {
            underlines += " hidden"
        }
        return underlines;
    }

    const [isOpen, setOpen] = useState(false);
    const [placement, setPlacement] = useState("right");
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const [color, setColor] = useState('text-white');
    const [hamburgerColor, setHamburgerColor] = useState('#FFF');

    window.onscroll = () => {
        const header = document.querySelector("header");
        const fixedNav = header.offsetTop;
    
        if (window.scrollY > fixedNav) {
          header.classList.add("navbar-fixed");
          setColor('text-secondary');
          setHamburgerColor('#111827');
        } else {
          header.classList.remove("navbar-fixed");
          setColor('text-white');
          setHamburgerColor('#FFF');
        }
    };

    return (
        <header className="absolute bg-transparent left-0 top-0 z-20 w-full border-gray-200">
            <div className="container">
                <nav className="flex items-center justify-between py-4">
                    <a href="/" className={`${color} transition-all duration-500`}>
                        <p className="text-4xl font-indo">pesona dewata</p>
                    </a>
                    <Flex className="md:hidden">
                        <Hamburger
                            color={hamburgerColor}
                            size={28}
                            toggled={isOpen}
                            toggle={showDrawer}
                        />
                    </Flex>
                    <Drawer
                        placement={placement}
                        width={320}
                        onClose={onClose}
                        open={isOpen}
                    >
                        <ul className="flex flex-col gap-5 font-jakartaSans">
                            <li>
                                <a href="/" className="nav-item-sm">Beranda</a>
                            </li>
                            <li>
                                <a href="/destinasi" className="nav-item-sm">Destinasi</a>
                            </li>
                            <li>
                                <a href="/artikel" className="nav-item-sm">Artikel</a>
                            </li>
                            <li>
                                <a href="/tentang-kami" className="nav-item-sm">Tentang Kami</a>
                            </li>
                        </ul>
                    </Drawer>
                    <ul className="md:flex hidden gap-8">
                        <li className="flex flex-col gap-[2px]">
                            <a href="/" className={Linkness('')}>Beranda</a>
                            <div className={underlineNav('')}></div>
                        </li>
                        <li className="flex flex-col gap-[2px]">
                            <a href="/destinasi" className={Linkness('destinasi')}>Destinasi</a>
                            <div className={underlineNav('destinasi')}></div>
                        </li>
                        <li className="flex flex-col gap-[2px]">
                            <a href="/artikel" className={Linkness('artikel')}>Artikel</a>
                            <div className={underlineNav('artikel')}></div>
                        </li>
                        <li className="flex flex-col gap-[2px]">
                            <a href="/tentang-kami" className={Linkness('tentang-kami')}>Tentang Kami</a>
                            <div className={underlineNav('tentang-kami')}></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


        // <header className="fixed left-0 top-0 z-20 w-full border-gray-200 bg-white">
        //     <nav className="base-container mx-auto flex flex-wrap items-center justify-between py-4">
        //         <a href="/" className="flex items-center gap-4">
        //             {/* <img src={Logo} className="h-10" alt="Umah Buku Logo" /> */}
        //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        //                 <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        //             </svg>
        //             <p className="text-xl font-bold">My Journals</p>
        //         </a>
        //         <Flex className="md:hidden">
        //             <Hamburger
        //                 color={"#3A2E26"}
        //                 size={28}
        //                 toggled={isOpen}
        //                 toggle={setOpen}
        //             />
        //         </Flex>
        //         <div className={isOpen ? `mt-4 md:mt-0 w-full items-center justify-between md:flex md:w-auto` : `hidden w-full items-center justify-between md:flex md:w-auto`}>
        //             <ul className="flex flex-col gap-2 md:gap-4 rounded-lg border border-gray-300 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:border-0 md:bg-white md:p-0">
        //                 <li>
        //                     <a href="/" className="nav-item">Beranda</a>
        //                 </li>
        //                 <li>
        //                     <a href="/" className="nav-item">Beranda</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>
    )
}

export default Header;