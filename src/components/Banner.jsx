import foto from "../assets/foto.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Banner = () => {

    const [t] = useTranslation("global");

    return (
        <>
            <section className="container mx-auto lg:px-16">
                <div className="banner_container">
                    <input type="checkbox" id="banner_image-click" />
                    <label htmlFor="banner_image-click">
                        <div className="banner_image">

                            <div className="card__face card__face--front">
                                <img src={foto} alt="Foto personal" />
                            </div>

                            <div className="card__face card__face--back">
                                <a href="https://www.linkedin.com/in/francobuceta/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-secondary" />
                                    <span>francobuceta</span>
                                </a>

                                <a href="mailto:francobuceta95@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-secondary" />
                                    <span>francobuceta95@gmail.com</span>
                                </a>

                                <a href="https://github.com/francobuceta" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} className="text-2xl text-secondary" />
                                    <span>francobuceta</span>
                                </a>
                            </div>
                        </div>
                    </label>

                    <div className="banner_text-container">
                        <h2>{t("banner.greeting")}</h2>
                        <h1>{t("banner.name")}</h1>
                        <h2>{t("banner.profession")}</h2>
                    </div>
                </div>

                <div className="box">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Banner;