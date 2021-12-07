import theFootballStore from "../../assets/imgs/thefootballstore.png"
import digitalKiki from "../../assets/imgs/digitalkiki.png"
import portfolio from "../../assets/imgs/portfolio.png"
import portfolioDark from "../../assets/imgs/portfolioDark.png"
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";



const Projects = () => {

    const { toggle } = useContext(ThemeContext);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })


    return (

        <div className={toggle ? "projectsContainer" : "projectsContainer__isDark"}>
            <Link to="/portfolio/thefootballstore"><div className="projectsContainer__box" data-aos="fade">


                <img src={theFootballStore} alt="the football store website" />
                <h2>The Football Store</h2>
            </div>
            </Link>
            <Link to="/portfolio/digitalkiki"><div className="projectsContainer__box" data-aos="fade">

                <img src={digitalKiki} alt="digital kiki website" />
                <h2>Digital Kiki</h2>

            </div>
            </Link>
            <div className="projectsContainer__box" data-aos="fade">

                <img src={toggle ? portfolioDark : portfolio} alt="santiago vittor portfolio" />
                <h2>Portfolio</h2>

            </div>
        </div>



    );
}



export default Projects;