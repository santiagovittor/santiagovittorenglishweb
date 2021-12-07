import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import digitalKiki from "../../assets/imgs/digitalkiki.png"

const DigitalKikiPage = () => {

    const { toggle } = useContext(ThemeContext)


    useEffect(() => {
        AOS.init()
    }, []);

    const [textOnDisplay, setTextOnDisplay] = useState(1)
    const [isActualActive, setIsActualActive] = useState(true)
    const [isObjetivosActive, setIsObjetivosActive] = useState(false)


    const handleActual = () => {
        setTextOnDisplay(1)
        setIsActualActive(true)
        setIsObjetivosActive(false)
    }
    const handleObjetivos = () => {
        setTextOnDisplay(2)
        setIsActualActive(false)
        setIsObjetivosActive(true)
    }


    return (
        <div className="profileCardContainer">
            <div className="profileCardContainer__img" data-aos="fade" data-aos-duration="3000">
                <a href="https://digitalkiki.vercel.app//"><img src={digitalKiki} alt="digital kiki website" /></a>
            </div>
            <div className="profileCardContainer__text">
                <div className={!toggle ? "profileCardContainer__text--menu" : "profileCardContainer__text--menuIsDark"}>
                    <ul>
                        <li onClick={handleActual} id={isActualActive ? "isActive" : "notActive"}>Descripción</li>
                        <li onClick={handleObjetivos} id={isObjetivosActive ? "isActive" : "notActive"}>Tecnologías</li>
                    </ul>
                    {textOnDisplay === 1 ?

                        <p>Sitio web creado para agencia de marketing digital en proceso de lanzamiento.</p>

                        :
                        <>
                            <li>
                                ReactJS: Function based components / Hooks: useState, useEffect, useContext
                            </li>
                            <li>
                                Firebase: authentification y firestore
                            </li>
                            <li>
                                Version control management: git/github
                            </li>
                            <li>
                                Deployment realizado en Vercel
                            </li>
                        </>}
                </div>
            </div>
        </div>
    );
}

export default DigitalKikiPage;