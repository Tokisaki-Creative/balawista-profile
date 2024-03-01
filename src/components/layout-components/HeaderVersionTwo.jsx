import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Flex, Drawer } from "antd";

const HeaderVersionTwo = () => {
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

    const [color, setColor] = useState('text-secondary');
    const [hamburgerColor, setHamburgerColor] = useState('#FFF');

    window.onscroll = () => {
        const header = document.querySelector("header");
        const fixedNav = header.offsetTop;
    
        if (window.scrollY > fixedNav) {
          header.classList.add("navbar-fixed");
          setHamburgerColor('#111827');
        } else {
          header.classList.remove("navbar-fixed");
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
                            color="#111827"
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
    )
}

export default HeaderVersionTwo;