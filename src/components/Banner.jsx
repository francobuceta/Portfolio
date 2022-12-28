import foto from "../assets/foto.jpg";
/* import Spline from '@splinetool/react-spline'; */
import { useTranslation } from 'react-i18next';

const Banner = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <section className="container mx-auto px-16">
                <div className="banner_container">
                    <div className="banner_photo-container">
                        <img src={foto} alt="Foto personal" />
                    </div>

                    <div className="banner_text-container">
                        <h2>{t("banner.greeting")}</h2>
                        <h1>{t("banner.name")}</h1>
                        <h2>{t("banner.profession")}</h2>
                    </div>
                </div>

                <div className="box">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>

            {/* <div className="notebook">
                <Spline scene="https://prod.spline.design/B4j4SY3yy1XjQahQ/scene.splinecode" />
            </div> */}
        </>
    )
}

export default Banner;