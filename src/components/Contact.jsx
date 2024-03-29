import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { useForm } from '@formspree/react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {

    const [valueName, setValueName] = useState("");
    const [valueMail, setValueMail] = useState("");
    const [valueMessage, setValueMessage] = useState("");

    const [t] = useTranslation("global");

    const [state, handleSubmit] = useForm("xoqzagqw");

    useEffect(() => {
        ScrollReveal().reveal('#title_contact', {
            delay: 350,
        });
        ScrollReveal().reveal('#sub_contact', {
            delay: 400,
        });
        ScrollReveal().reveal('.contact_icons', {
            delay: 450,
        });
        ScrollReveal().reveal('.form_container', {
            delay: 550
        });
    }, []);

    return (
        <>
            <section className="container mx-auto px-16 mb-5 mobile_padding" id="contact">
                <div className="about_title" id="title_contact">
                    <h2 className='mt-24'>{t("contact.title")}</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center mobile_padding' id="sub_contact">
                    <h3 className="max-w-5xl">{t("contact.description")}</h3>
                </div>

                <div className="flex justify-center mt-10 gap-11 mobile_padding">
                    <div className="contact_icons">
                        <a href="mailto:francobuceta95@gmail.com" aria-label="Email" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /></a>
                        <span>{t("contact.email")}</span>
                    </div>
                    <div className="contact_icons">
                        <a href="https://www.linkedin.com/in/francobuceta/" aria-label="LinkeIn" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <span>{t("contact.linkedin")}</span>
                    </div>
                    <div className="contact_icons">
                        <a href="https://github.com/francobuceta" aria-label="Github" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <span>{t("contact.github")}</span>
                    </div>
                </div>

                <div className="form_container">

                    <div className="arrow_up">
                        <a href="#navbar" aria-label="Arrow Up">
                            <FontAwesomeIcon icon={faArrowCircleUp} />
                        </a>
                        <span>{t("contact.arrow")}</span>
                    </div>

                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <input id="name" type="text" name="Nombre"
                                onChange={e => setValueName(e.target.value)}
                                className={valueName ? "has-value" : ""}
                                required>
                            </input>
                            <span><FontAwesomeIcon icon={faUser} /></span>
                            <label htmlFor="name">{t("contact.name")}</label>
                        </div>

                        <div>
                            <input id="email" type="email" name="Email"
                                onChange={e => setValueMail(e.target.value)}
                                className={valueMail ? "has-value" : ""}
                                required>
                            </input>
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <label htmlFor="email">{t("contact.emailInput")}</label>
                            
                        </div>

                        <div>
                            <textarea id="text" name="Mensaje"
                                onChange={e => setValueMessage(e.target.value)}
                                className={valueMessage ? "has-value" : ""}
                                required>
                            </textarea>
                            <label htmlFor="text" className="text_label">{t("contact.message")}</label>
                        </div>
                        
                        {
                            state.succeeded
                            ? <div className="flex flex-col align-center gap-2"> 
                                <input id="submitted" type="submit" value={t("contact.sent")} disabled={state.submitting}></input>
                                <p className="message_sent">{t("contact.gratitude")}</p>
                            </div>

                            : state.errors.length > 0 ? 
                                <>
                                    <input id="submit" type="submit" value={t("contact.send")} disabled={state.submitting}></input>
                                    <p className="text-red-600 font-bold text-xl mt-2">Email inválido</p>
                                </>
                            
                            : <input id="submit" type="submit" value={t("contact.send")} disabled={state.submitting}></input>
                        }
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;