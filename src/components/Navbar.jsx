const Navbar = () => {
    return (
        <>
            <header className="container mx-auto" id="navbar">
                <nav className="flex justify-between items-center">
                    <div className="navbar_logo-container px-10">
                        <a href="#navbar"><span className="navbar_logo">francobuceta</span></a>
                    </div>
                    <div className="px-10">
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

