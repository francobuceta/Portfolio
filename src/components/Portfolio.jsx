import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';
import ecommerce from "../assets/proyect-ecommerce.jpeg";
import asteroids from "../assets/proyect-asteroids.png";
import prodeconsa from "../assets/proyecto-prodeconsa.jpeg";
import bright from "../assets/proyecto-bright.jpg";
import boutique from "../assets/proyecto-boutique.jpeg";
import meli from "../assets/meli.jpeg";

const Portfolio = () => {

    const [t] = useTranslation("global");

    const projects = [
        {
            id: "1",
            title: "Pick & Roll",
            description: "E-commerce: React, Firebase, Bootstrap, AOS",
            image: ecommerce,
            deployLink: "https://pickandroll.netlify.app/",
            repositoryLink: "https://github.com/francobuceta/Ecommerce-React"
        },
        {
            id: "2",
            title: "Mercado Libre Clone",
            description: "WebApp: React, Tailwind, Redux Toolkit, ChatGPT",
            image: meli,
            deployLink: "https://mercadolibre-s8-08.netlify.app/",
            repositoryLink: "https://github.com/No-Country/s8-08-t-java-react-mercadolibre"
        },
        {
            id: "3",
            title: "A&M Prodeconsa",
            description: "Landing Page: HTML5, CSS3, JavaScript",
            image: prodeconsa,
            deployLink: "https://amprodeconsa.com/index.html",
            repositoryLink: "https://github.com/francobuceta/Prodeconsa-SA"
        },
        {
            id: "4",
            title: "Custom Boutique",
            description: "Landing Page: React, Tailwind, Axios",
            image: boutique,
            deployLink: "https://customboutique.com.ar/",
            repositoryLink: "https://github.com/francobuceta/Custom-Boutique"
        },
        {
            id: "5",
            title: "Asteroids Game",
            description: "JavaScript, P5.js, HTML5, CSS3",
            image: asteroids,
            deployLink: "https://asteroids-atari.netlify.app/",
            repositoryLink: "https://github.com/francobuceta/Asteroids"
        },
        {
            id: "6",
            title: "Bright English",
            description: "WebApp: React, Bootstrap, Redux Toolkit, Axios",
            image: bright,
            deployLink: "https://bright-english.vercel.app/",
            repositoryLink: "https://github.com/francobuceta/Bright-English"
        }
    ]

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
                    <h2 className='mt-24'>Portfolio</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center' id="sub_portfolio">
                    <h3>{t("portfolio.title")}</h3>
                </div>

                <div className="portfolio_container">
                    {
                        projects.map(project => {
                            return (
                                <div className="portfolio__item" key={project.id}>
                                    <picture>
                                        <source type="image/jpeg" srcSet={project.image}></source>
                                        <img className="portfolio__img" alt={`Portfolio item - ${project.title}`}></img>
                                    </picture>
                                    <div className="portfolio__description">
                                        <h3 className="portfolio__description-title">{project.title}</h3>
                                        <p className="portfolio__description-text">
                                            {project.description}
                                        </p>
                                        <div className="buttons__container">
                                            <a className="button" href={project.deployLink} aria-label={project.id} target="_blank">
                                                <FontAwesomeIcon icon={faEarthAmerica} />
                                                <span>{t("portfolio.website")}</span>
                                            </a>
                                            <a className="button" href={project.repositoryLink} aria-label={project.id} target="_blank">
                                                <FontAwesomeIcon icon={faGithub} />
                                                <span>{t("portfolio.repository")}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Portfolio;