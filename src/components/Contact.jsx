import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const [valueName, setValueName] = useState("");
    const [valueMail, setValueMail] = useState("");
    const [valueMessage, setValueMessage] = useState("");

    return (
        <>
            <section className="container mx-auto px-16" id="contact">
                <div className="about_title">
                    <h2 className='mt-24'>Contacto</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center'>
                    <h3 className="max-w-5xl">Sientete libre de comunicarte conmigo y charlar sobre algún trabajo freelance, o en empresa, o simplemente..¡charlar! &#128516;</h3>
                </div>

                <div className="flex justify-center mt-10 gap-11">
                    <div className="contact_icons">
                        <a href="mailto:francobuceta95@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /></a>
                        <span>Envíame un e-mail</span>
                    </div>
                    <div className="contact_icons">
                        <a href="https://www.linkedin.com/in/francobuceta/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <span>Contáctame por LinkedIn</span>
                    </div>
                    <div className="contact_icons">
                        <a href="https://github.com/francobuceta" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <span>Sigueme en GitHub</span>
                    </div>
                </div>

                <div className="form_container">
                    <form action="" className="form">
                        <div>
                            <input id="name" type="text" 
                                onChange={e => setValueName(e.target.value)} 
                                className={valueName ? "has-value" : ""}>
                            </input>
                            <span><FontAwesomeIcon icon={faUser} /></span>
                            <label htmlFor="name">Nombre</label>
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
                            <label htmlFor="text" className="text_label">Mensaje</label>
                        </div>
                        
                        <input id="submit" type="submit" value="Enviar"></input>
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;