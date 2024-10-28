import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import CornerGithub from "../cornerGithub/CornerGithub";

const MainText = () => {

    const [text,setText] = useState(true);
    const { toggle } = useContext(ThemeContext);


    useEffect(() => {
        AOS.init()
    }, []);

    useEffect(() => {
        const intervalID = setTimeout(() =>  {
            setText((text) => !text)
        }, 2500);
    
        return () => clearInterval(intervalID);
    }, [text]);
    
    return (
            <div className={toggle ? "mainTextContainer" : "mainTextContainer__isDark"}>
                <CornerGithub/>
                <h1 data-aos="zoom-in" data-aos-duration="1500">
                Hi, I am 
                </h1>
                <h1 data-aos="zoom-out" data-aos-duration="1500">
                {text? 'Santiago Vittor' :  'Front End Developer'}
                </h1>
            </div>
    );
}

export default MainText;