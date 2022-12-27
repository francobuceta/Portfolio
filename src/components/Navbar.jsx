import { useState, useEffect } from "react";

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

    return (
        <>

            <header className="container" id="navbar">
                <nav className={show ? "navbar_scroll" : ""} >
                    <div className="navbar_logo-container px-24">
                        <a href="#navbar"><span className="navbar_logo">francobuceta</span></a>
                    </div>
                    <div className="px-24">
                        <ul className="flex navbar_list">
                            <li>
                                <a href="#navbar"><span>Inicio</span></a>
                            </li>
                            <li>
                                <a href="#about"><span>Acerca</span></a>
                            </li>
                            <li>
                                <a href="#portfolio"><span>Portfolio</span></a>
                            </li>
                            <li>
                                <a href="#services"><span>Servicios</span></a>
                            </li>
                            <li>
                                <a href="#contact"><span>Contacto</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar;

