import logo from "../assets/react.svg";
/* import Spline from '@splinetool/react-spline'; */
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {

    })

    return (
        <>
            <section className="container mx-auto px-16">
                <div className="banner_container">
                    <div className="banner_photo-container">
                        <img src={logo} alt="" />
                    </div>

                    <div className="banner_text-container">
                        <h2>¡ Hola !</h2>
                        <h1>Soy Franco Buceta</h1>
                        <h2>- Frontend Developer -</h2>
                    </div>
                </div>
            </section>

            {/* <div className="notebook">
                <Spline scene="https://prod.spline.design/B4j4SY3yy1XjQahQ/scene.splinecode" />
            </div> */}
        </>
    )
}

export default Banner;