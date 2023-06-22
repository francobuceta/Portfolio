import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import ServicesData from "../utils/servicesData/services";
import ScrollReveal from 'scrollreveal';

const Services = () => {

    const [t] = useTranslation("global");
    const services = ServicesData();

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
                    <h2 className='mt-24'>{t("services.title")}</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center' id="sub_services">
                    <h3>{t("services.description")}</h3>
                </div>

                <div className="services_container">
                    {
                        services.map(elem => {
                            return (
                                <div className="services_item" key={elem.title}>
                                    <div>
                                        <FontAwesomeIcon icon={elem.icon} />
                                    </div>
                                    <h4>{elem.title}</h4>
                                    <p>{elem.text}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Services;