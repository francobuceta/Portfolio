import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faSass, faBootstrap, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import pdf from "../assets/cv.pdf"
import ScrollReveal from 'scrollreveal';
import { ImHtmlFive } from "react-icons/im"; 

const About = () => {
    const [t] = useTranslation("global");

    const technologies = [
        {
            icon: ImHtmlFive,
            text: "HTML"
        },
        {
            icon: ImHtmlFive,
            text: "CSS"
        },
        {
            icon: ImHtmlFive,
            text: "SASS"
        },
        {
            icon: ImHtmlFive,
            text: "JAVASCRIPT"
        },
        {
            icon: ImHtmlFive,
            text: "REACT"
        },
        {
            icon: ImHtmlFive,
            text: "GIT"
        },
        {
            icon: ImHtmlFive,
            text: "GITHUB"
        },
        {
            icon: ImHtmlFive,
            text: "FIREBASE"
        },
        {
            icon: ImHtmlFive,
            text: "NODE JS"
        },
        {
            icon: ImHtmlFive,
            text: "MONGO DB"
        },
        {
            icon: ImHtmlFive,
            text: "EXPRESS"
        },
    ]

    useEffect(() => {
        ScrollReveal().reveal('#title_about', {
            delay: 250,
        });
        ScrollReveal().reveal('#about_content', {
            delay: 300,
        });
    }, [])

    return (
        <>
            <section className="container mx-auto" id="about">
                <div className="about_title" id="title_about">
                    <h2 className='mt-24'>{t("about.aboutMe")}</h2>
                </div>
                
                <div className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 mobile_padding" id="about_content">
                    <div className="about_description lg:mt-5">
                        <h3 className="mb-5">{t("about.who")}</h3>
                        <p className="description">{t("about.description")}</p>
                        <p className="mt-5">{t("about.description2")}</p>
                        <div>
                            <button>
                                <a href={pdf} download="Franco Buceta-CV">
                                    <FontAwesomeIcon icon={faFileDownload} />
                                    <span>{t("about.download")}</span>
                                </a>
                            </button>
                        </div>
                    </div>
                    
                    <div className="about_skills lg:mt-5">
                        <div className="skills_title">
                            <h3 className='mb-5'>{t("about.skills")}</h3>
                        </div>

                        {
                            technologies.map(elem => (
                                <div className="skill_item" key={elem.text}>
                                    {<elem.icon/>}
                                    <span>{elem.text}</span>
                                </div>
                            ))
                        }

                        {/* <div className="skill_item">
                            <FontAwesomeIcon icon={faHtml5} />
                            <span>HTML</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <span>CSS</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faSass} />
                            <span>SASS</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faBootstrap} />
                            <span>BOOTSTRAP</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faJs} />
                            <span>JAVASCRIPT</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faReact} />
                            <span>REACT</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faGitAlt} />
                            <span>GIT</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GITHUB</span>
                        </div>
                        <div className="skill_item">
                            <FontAwesomeIcon icon={faDatabase} />
                            <span>FIREBASE</span>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;