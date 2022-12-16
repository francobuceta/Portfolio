const Navbar = () => {
    return (
        <>
            <header className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="navbar_logo-container px-10">
                        <span className="navbar_logo">francobuceta</span>
                    </div>
                    <div className="px-10">
                        <ul className="flex navbar_list">
                            <li>
                                <span>Inicio</span>
                            </li>
                            <li>
                                <span>Acerca</span>
                            </li>
                            <li>
                                <span>Servicio</span>
                            </li>
                            <li>
                                <span>Portfolio</span>
                            </li>
                            <li>
                                <span>Contacto</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;

