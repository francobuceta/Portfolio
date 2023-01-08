import { useEffect } from "react";
import foto1 from "../assets/proyect-ecommerce.jpeg";
import foto2 from "../assets/proyect-asteroids.png";
import foto3 from "../assets/proyecto-prodeconsa.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

const Portfolio = () => {

    const [t] = useTranslation("global");

    useEffect(() => {
        ScrollReveal().reveal('#title_portfolio', {
            delay: 350,
        });
        ScrollReveal().reveal('#sub_portfolio', {
            delay: 400,
        });
        ScrollReveal().reveal('.portfolio_container', {
            delay: 500,
        });
    }, [])

    return (
        <>
            <section className="container mx-auto px-16 mobile_padding" id="portfolio">
                <div className="about_title" id="title_portfolio">
                    <h2 className='lg:mt-24 mt-10'>Portfolio</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center' id="sub_portfolio">
                    <h3>{t("portfolio.title")}</h3>
                </div>

                <div className="portfolio_container">
                    <div className="portfolio__item">
                        <picture>
                            <source type="image/jpeg" srcSet={foto1}></source>
                            <img className="portfolio__img" alt="Portfolio item - Ecommerce"></img>
                        </picture>
                            <div className="portfolio__description">
                                <h3 className="portfolio__description-title">E-Commerce</h3>
                                <p className="portfolio__description-text">
                                    React, Firebase, Bootstrap, AOS
                                </p>
                                <div className="buttons__container">
                                    <a className="button" href="https://pickandroll.netlify.app/" target="_blank">
                                        <FontAwesomeIcon icon={faEarthAmerica} />
                                        <span>{t("portfolio.website")}</span>
                                    </a>
                                    <a className="button" href="https://github.com/francobuceta/Ecommerce-React" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>{t("portfolio.repository")}</span>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="portfolio__item">
                        <picture>
                            <source type="image/jpeg" srcSet={foto2}></source>
                            <img className="portfolio__img" alt="Portfolio item - Ecommerce"></img>
                        </picture>
                            <div className="portfolio__description">
                                <h3 className="portfolio__description-title">Asteroids Game</h3>
                                <p className="portfolio__description-text">
                                    Vanilla Js, P5.js, HTML5, CSS3
                                </p>
                                <div className="buttons__container">
                                    <a className="button" href="https://asteroids-atari.netlify.app/" target="_blank">
                                        <FontAwesomeIcon icon={faEarthAmerica} />
                                        <span>{t("portfolio.website")}</span>
                                    </a>
                                    <a className="button" href="https://github.com/francobuceta/Asteroids" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>{t("portfolio.repository")}</span>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="portfolio__item">
                        <picture>
                            <source type="image/jpeg" srcSet={foto3}></source>
                            <img className="portfolio__img" alt="Portfolio item - Ecommerce"></img>
                        </picture>
                            <div className="portfolio__description">
                                <h3 className="portfolio__description-title">A&M Prodeconsa</h3>
                                <p className="portfolio__description-text">
                                    Landing Page: HTML5, CSS3, JavaScript
                                </p>
                                <div className="buttons__container">
                                    <a className="button" href="https://amprodeconsa.com/index.html" target="_blank">
                                        <FontAwesomeIcon icon={faEarthAmerica} />
                                        <span>{t("portfolio.website")}</span>
                                    </a>
                                    <a className="button" href="https://github.com/francobuceta/Prodeconsa-SA" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>{t("portfolio.repository")}</span>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>

                
            </section>
        </>
    )
}

export default Portfolio;