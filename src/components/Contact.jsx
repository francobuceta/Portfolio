import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const [valueName, setValueName] = useState("");
    const [valueMail, setValueMail] = useState("");
    const [valueMessage, setValueMessage] = useState("");

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <section className="container mx-auto px-16" id="contact">
                <div className="about_title">
                    <h2 className='mt-24'>{t("contact.title")}</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center'>
                    <h3 className="max-w-5xl">{t("contact.description")}</h3>
                </div>

                <div className="flex justify-center mt-10 gap-11">
                    <div className="contact_icons">
                        <a href="mailto:francobuceta95@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /></a>
                        <span>{t("contact.email")}</span>
                    </div>
                    <div className="contact_icons">
                        <a href="https://www.linkedin.com/in/francobuceta/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <span>{t("contact.linkedin")}</span>
                    </div>
                    <div className="contact_icons">
                        <a href="https://github.com/francobuceta" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <span>{t("contact.github")}</span>
                    </div>
                </div>

                <div className="form_container">

                    <div className="arrow_up">
                        <a href="#navbar">
                            <FontAwesomeIcon icon={faArrowCircleUp} />
                        </a>
                    </div>

                    <form action="" className="form">
                        <div>
                            <input id="name" type="text" 
                                onChange={e => setValueName(e.target.value)} 
                                className={valueName ? "has-value" : ""}>
                            </input>
                            <span><FontAwesomeIcon icon={faUser} /></span>
                            <label htmlFor="name">{t("contact.name")}</label>
                        </div>
                        
                        <div>
                            <input id="mail" type="email" 
                                onChange={e => setValueMail(e.target.value)} 
                                className={valueMail ? "has-value" : ""}>
                            </input>
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <label htmlFor="mail">E-mail</label>
                        </div>
                        
                        <div>
                            <textarea id="text"
                                onChange={e => setValueMessage(e.target.value)} 
                                className={valueMessage ? "has-value" : ""}>
                            </textarea>
                            <label htmlFor="text" className="text_label">{t("contact.message")}</label>
                        </div>
                        
                        <input id="submit" type="submit" value={t("contact.send")}></input>
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;