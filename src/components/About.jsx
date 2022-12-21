import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faSass, faBootstrap, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';



const About = () => {
    return (
        <>
            <section className="container mx-auto mt-16">
                <div className="about_title">
                    <h2>Acerca de mi</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-10">
                    <div className="about_description mt-5">
                        <h3 className="mb-5">Quien soy :</h3>
                        <p className="description">Soy Franco Buceta, un apasionado de la tecnología <br />y Desarrollador Web</p>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit itaque 
                            autem explicabo nulla ex, atque asperiores! Excepturi ex ad libero!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit itaque 
                            autem explicabo nulla ex, atque asperiores! Excepturi ex ad libero!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit itaque 
                            autem explicabo nulla ex, atque asperiores! Excepturi ex ad libero!
                        </p>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faFileDownload} />
                                <span>Descargar CV</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="about_skills mt-5">
                        <div className="skills_title"><h3>Mis habilidades :</h3></div>
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