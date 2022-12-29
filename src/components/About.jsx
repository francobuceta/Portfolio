import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faSass, faBootstrap, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import pdf from "../assets/cv.pdf"
import ScrollReveal from 'scrollreveal';

const About = () => {
    const [t] = useTranslation("global");

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
                
                <div className="grid grid-cols-2 gap-10" id="about_content">
                    <div className="about_description mt-5">
                        <h3 className="mb-5">{t("about.who")}</h3>
                        <p className="description">{t("about.description")}</p>
                        <p className="mt-5">{t("about.description2")}</p>
                        <div>
                            <a href={pdf} download="Franco Buceta-CV">
                                <button>
                                    <FontAwesomeIcon icon={faFileDownload} />
                                    <span>{t("about.download")}</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="about_skills mt-5">
                        <div className="skills_title"><h3>{t("about.skills")}</h3></div>
                        <div className="skill_item">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;