import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { projects } from "../utils/proyectsData/proyects";
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
                                            {
                                                project.repositoryLink !== "" &&
                                                <a className="button" href={project.repositoryLink} aria-label={project.id} target="_blank">
                                                    <FontAwesomeIcon icon={faGithub} />
                                                    <span>{t("portfolio.repository")}</span>
                                                </a>
                                            }
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