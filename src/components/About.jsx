import { useEffect } from 'react';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'; */
import { technologies } from '../utils/skillsData/skills';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
/* import spanishPdf from "../assets/cv.pdf";
import englishPdf from "../assets/resume.pdf"; */
import ScrollReveal from 'scrollreveal';

const About = () => {
    const [t] = useTranslation("global");
    const currentLenguage = i18n.language;

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
                        {/* <div>
                            <button>
                                <a href={currentLenguage === "en" ? englishPdf : spanishPdf} 
                                    download={currentLenguage === "en" ? "Franco Buceta-Resume" : "Franco Buceta-CV"}
                                >
                                    <FontAwesomeIcon icon={faFileDownload} />
                                    <span>{t("about.download")}</span>
                                </a>
                            </button>
                        </div> */}
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