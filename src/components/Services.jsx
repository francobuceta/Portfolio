import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faPalette, faCode, faCartShopping, faGaugeHigh, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

const Services = () => {

    const [t] = useTranslation("global");

    useEffect(() => {
        ScrollReveal().reveal('#title_services', {
            delay: 350,
        });
        ScrollReveal().reveal('#sub_services', {
            delay: 400,
        });
        ScrollReveal().reveal('.services_container', {
            delay: 500,
        });
    }, []);

    return (
        <>
            <section className="container mx-auto px-16 mobile_padding" id="services">
                <div className="about_title" id="title_services">
                    <h2 className='lg:mt-24 mt-24'>{t("services.title")}</h2>
                </div>
                
                <div className='flex justify-center items-center text-white font-poppins text-xl text-center' id="sub_services">
                    <h3>{t("services.description")}</h3>
                </div>
                
                <div className="services_container">
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <h4>{t("services.mobile-title")}</h4>
                        <p>{t("services.mobile")}</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faPalette} />
                        </div>
                        <h4>{t("services.design-title")}</h4>
                        <p>{t("services.design")}</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <h4>{t("services.develop-title")}</h4>
                        <p>{t("services.develop")}</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <h4>{t("services.ecommerce-title")}</h4>
                        <p>{t("services.ecommerce")}</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faGaugeHigh} />
                        </div>
                        <h4>{t("services.performance-title")}</h4>
                        <p>{t("services.performance")}</p>
                    </div>
                    <div className="services_item">
                        <div>
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <h4>SEO</h4>
                        <p>{t("services.seo")}</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services;