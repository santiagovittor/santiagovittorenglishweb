import theFootballStore from "../../assets/imgs/thefootballstore.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from '../../context/themeContext/ThemeContext';


const TheFootballStorePage = () => {

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
                <a href="https://thefootballstore.vercel.app/"><img src={theFootballStore} alt="the football store website" /></a>
            </div>
            <div className="profileCardContainer__text">
                <div className={!toggle ? "profileCardContainer__text--menu" : "profileCardContainer__text--menuIsDark"}>
                    <ul>
                        <li onClick={handleActual} id={isActualActive ? "isActive" : "notActive"}>Description</li>
                        <li onClick={handleObjetivos} id={isObjetivosActive ? "isActive" : "notActive"}>Technologies</li>
                    </ul>
                    {textOnDisplay === 1 ?

                        <p>Website created for the ReactJS course at Coderhouse, simulating the existence of an e-commerce for selling classic football jerseys</p>

                        :
                        <>
                            <li>
                                ReactJS: Function based components - Hooks: useState / useEffect / useContext
                            </li>
                            <li>
                                Firebase/Firestore
                            </li>
                            <li>
                                Version control management: git/github
                            </li>
                            <li>
                                Pure css.
                            </li>
                            <li>
                                Deployment done using Vercel
                            </li>
                        </>}
                </div>
            </div>
        </div>



    );
}

export default TheFootballStorePage;