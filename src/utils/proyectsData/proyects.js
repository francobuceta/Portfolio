import ecommerce from "../../assets/proyect-ecommerce.jpeg";
import asteroids from "../../assets/proyect-asteroids.png";
import prodeconsa from "../../assets/proyecto-prodeconsa.jpeg";
import bright from "../../assets/proyecto-bright.jpg";
import boutique from "../../assets/proyecto-boutique.jpeg";
import meli from "../../assets/meli.jpeg";
import agape from "../../assets/proyecto-agape.png";

export const projects = [
    {
        id: "1",
        title: "Pick & Roll",
        description: "E-commerce: React, Firebase, Bootstrap, AOS",
        image: ecommerce,
        deployLink: "https://pickandroll.netlify.app/",
        repositoryLink: "https://github.com/francobuceta/Ecommerce-React"
    },
    {
        id: "2",
        title: "Mercado Libre Clone",
        description: "WebApp: React, Tailwind, Redux Toolkit, ChatGPT",
        image: meli,
        deployLink: "https://meli-clone-seven.vercel.app/",
        repositoryLink: "https://github.com/No-Country/s8-08-t-java-react-mercadolibre"
    },
    {
        id: "3",
        title: "A&M Prodeconsa",
        description: "Landing Page: HTML5, CSS3, JavaScript",
        image: prodeconsa,
        deployLink: "https://amprodeconsa.com/index.html",
        repositoryLink: "https://github.com/francobuceta/Prodeconsa-SA"
    },
    {
        id: "4",
        title: "Custom Boutique",
        description: "Landing Page: React, Tailwind, Axios",
        image: boutique,
        deployLink: "https://customboutique.com.ar/",
        repositoryLink: "https://github.com/francobuceta/Custom-Boutique"
    },
    {
        id: "5",
        title: "Ágape Libros",
        description: "E-commerce: React, Material UI, Redux Toolkit",
        image: agape,
        deployLink: "https://agape-libros.com.ar/",
        repositoryLink: ""
    },
    {
        id: "6",
        title: "Asteroids Game",
        description: "JavaScript, P5.js, HTML5, CSS3",
        image: asteroids,
        deployLink: "https://asteroids-atari.netlify.app/",
        repositoryLink: "https://github.com/francobuceta/Asteroids"
    },
    {
        id: "7",
        title: "Bright English",
        description: "WebApp: React, Bootstrap, Redux Toolkit, Axios",
        image: bright,
        deployLink: "https://bright-english.vercel.app/",
        repositoryLink: "https://github.com/No-Country/C9-26-Java-React"
    }
]