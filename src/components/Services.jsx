import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faPalette, faCode, faCartShopping, faGaugeHigh, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <>
            <section className="container mx-auto px-16" id="services">
                <div className="about_title">
                    <h2 className='mt-24'>Servicios</h2>
                </div>
                
                <div className='flex justify-center items-center text-white font-poppins text-xl'>
                    <h3>Estos son los servicios que ofrezco.</h3>
                </div>
                
                <div className="services_container">
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <h4>Full Responsive</h4>
                        <p>Your site will display properly on any device, including desktop computers, tablets and mobile phones.</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faPalette} />
                        </div>
                        <h4>Diseño Creativo</h4>
                        <p>A good and attractive web design helps you keep your leads on your site, which is the digital face of your business.</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <h4>Desarrollo</h4>
                        <p>I know the importance of web design and can help you create a website you’ll love.</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <h4>E-commerce</h4>
                        <p>There are a lot of social platforms out there, and you should promote your presence on them on your website</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faGaugeHigh} />
                        </div>
                        <h4>Rendimiento</h4>
                        <p>Retaining users is crucial to improving conversions. High-performing sites engage and retain users</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <h4>SEO</h4>
                        <p>I will optimize your site with intelligent Search Engine Optimization strategy to generate leads.</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services;