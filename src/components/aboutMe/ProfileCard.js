import profilePicture from '../../assets/imgs/profilePicture.jpg'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState, useContext } from "react";
import Actual from '../aboutMe/conditionalText/Actual'
import Objetives from '../aboutMe/conditionalText/Objetives'
import { ThemeContext } from '../../context/themeContext/ThemeContext';


const ProfileCard = () => {

    const {toggle} = useContext(ThemeContext)


    useEffect(() =>{
        AOS.init()
    },[]);

    const [textOnDisplay,setTextOnDisplay] = useState(1)
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
            <img src={profilePicture} alt="santiago vittor" />
            </div>
            <div className="profileCardContainer__text">
                <div className={!toggle? "profileCardContainer__text--menu" : "profileCardContainer__text--menuIsDark"}>
            <ul>
                <li onClick={handleActual} id={isActualActive?"isActive":"notActive"}>Actualidad</li>
                <li onClick={handleObjetivos} id={isObjetivosActive?"isActive":"notActive"}>Objetivos</li>
            </ul>
            {textOnDisplay===1? <Actual/> : <Objetives/>   }
            </div>
            </div>
        </div>

     );
}
 
export default ProfileCard;