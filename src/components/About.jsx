import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faSass, faBootstrap, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import pdf from "../assets/cv.pdf"
import ScrollReveal from 'scrollreveal';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub, SiFirebase, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const About = () => {
    const [t] = useTranslation("global");

    const technologies = [
        {
            icon: SiHtml5,
            text: "HTML"
        },
        {
            icon: SiCss3,
            text: "CSS"
        },
        {
            icon: FaSass,
            text: "SASS"
        },
        {
            icon: SiJavascript,
            text: "JAVASCRIPT"
        },
        {
            icon: SiReact,
            text: "REACT"
        },
        {
            icon: SiGit,
            text: "GIT"
        },
        {
            icon: SiGithub,
            text: "GITHUB"
        },
        {
            icon: SiFirebase,
            text: "FIREBASE"
        },
        {
            icon: SiNodedotjs,
            text: "NODE JS"
        },
        {
            icon: SiMongodb,
            text: "MONGO DB"
        },
        {
            icon: SiExpress,
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

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;