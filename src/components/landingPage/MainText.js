import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const MainText = () => {

    useEffect(() => {
        AOS.init()
    }, []);


    const { toggle } = useContext(ThemeContext)

    return (
            <div className={toggle ? "mainTextContainer" : "mainTextContainer__isDark"}>
                <h1 data-aos="zoom-in" data-aos-duration="3000">Hola, soy Santiago Vittor!</h1>
            </div>
    );
}

export default MainText;