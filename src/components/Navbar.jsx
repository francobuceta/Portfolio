import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logoMobile from "../assets/logo_mobile.png";
import logoMobile2 from "../assets/logo_mobile2.png";
import logoSmall from "../assets/logo_small.png";
import usa from "../assets/usa.png";
import spain from "../assets/spain.png";

const Navbar = () => {

    const [show, handleShow] = useState(false);
    const [t, i18n] = useTranslation("global");
    const [open, setOpen] = useState(false);

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

    return (
        <>
            <header className="md:container" id="navbar">
                <nav className={`${show ? "navbar_scroll" : ""} w-full`} >
                    <div className="navbar_logo-container">
                        <div className="logo_container">
                            <a href="#navbar">
                                <picture>
                                    <source media="(max-width:400px)" srcSet={logoSmall}/>
                                    <source media="(max-width:650px)" srcSet={show ? logoMobile2 : logoMobile}/>
                                    <img src={show ? logo2 : logo} className="navbar_logo"></img>
                                </picture>
                            </a>
                        </div>

                        <div className="desktop_flags flex gap-3">
                            <img src={spain} alt="Bandera de España" onClick={() => i18n.changeLanguage("es")} />
                            <img src={usa} alt="Bandera de Estados Unidos" onClick={() => i18n.changeLanguage("en")} />
                        </div>
                    </div>

                    <div className="hidden hamburger_menu-container px-24">
                        <FontAwesomeIcon icon={faBars} className="hamburger_menu" onClick={() => setOpen(!open)} /> 
                    </div>

                    <div className={`${open ? "block" : "hidden"} navbar_list-container`}>
                        <ul className="flex w-full navbar_list">
                            <li>
                                <Link activeClass="navbar_active" spy to="navbar" onClick={() => setOpen(!open)}>
                                    <span>{t("navbar.home")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="about" onClick={() => setOpen(!open)}>
                                    <span>{t("navbar.about")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="portfolio" onClick={() => setOpen(!open)}>
                                    <span>{t("navbar.portfolio")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="services" onClick={() => setOpen(!open)}>
                                    <span>{t("navbar.services")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="navbar_active" spy to="contact" onClick={() => setOpen(!open)}>
                                    <span>{t("navbar.contact")}</span>
                                </Link>
                            </li>
                            <li>
                                <div className="hidden mobile_flags flex gap-3 mb-3">
                                    <img src={spain} alt="Bandera de España" onClick={() => i18n.changeLanguage("es")} />
                                    <img src={usa} alt="Bandera de Estados Unidos" onClick={() => i18n.changeLanguage("en")} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;

