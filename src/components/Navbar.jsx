import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";
import usa from "../assets/usa.png";
import spain from "../assets/spain.png";

const Navbar = () => {

    const [show, handleShow] = useState(false);

    const onScroll = () => {
        if (window.scrollY > 0) {
            handleShow(true);
        } else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const [t, i18n] = useTranslation("global");

    return (
        <>

            <header className="container" id="navbar">
                <nav className={show ? "navbar_scroll" : ""} >
                    <div className="navbar_logo-container px-24">
                        <a href="#navbar"><span className="navbar_logo">francobuceta</span></a>
                        
                        <div className="flex gap-3">
                            <img src={spain} alt="Bandera de España" onClick={() => i18n.changeLanguage("es")}/>
                            <img src={usa} alt="Bandera de Estados Unidos" onClick={() => i18n.changeLanguage("en")}/>
                        </div>
                    </div>
                    <div className="px-24">
                        <ul className="flex navbar_list">
                            <li>
                                <Link activeClass="navbar_active" spy to="navbar">
                                    <span>{t("navbar.home")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="about">
                                    <span>{t("navbar.about")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="portfolio"><span>{t("navbar.portfolio")}</span></Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="services"><span>{t("navbar.services")}</span></Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="contact"><span>{t("navbar.contact")}</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar;

