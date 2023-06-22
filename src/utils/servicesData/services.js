import { faMobileScreenButton, faPalette, faCode, faCartShopping, faGaugeHigh, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const ServicesData = () => {

    const [t] = useTranslation("global");

    const services = [
        {
            icon: faMobileScreenButton,
            title: t("services.mobile-title"),
            text: t("services.mobile")
        },
        {
            icon: faPalette,
            title: t("services.design-title"),
            text: t("services.design")
        },
        {
            icon: faCode,
            title: t("services.develop-title"),
            text: t("services.develop")
        },
        {
            icon: faCartShopping,
            title: t("services.ecommerce-title"),
            text: t("services.ecommerce")
        },
        {
            icon: faGaugeHigh,
            title: t("services.performance-title"),
            text: t("services.performance")
        },
        {
            icon: faScrewdriverWrench,
            title: "SEO",
            text: t("services.seo")
        }
    ]

    return services;
}

export default ServicesData;
