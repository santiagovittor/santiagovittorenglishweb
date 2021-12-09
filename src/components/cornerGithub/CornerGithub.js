import cornerGithubIcon from '../../assets/svgs/cornerGithub.svg'
import cornerGithubIconIsDark from '../../assets/svgs/cornerGithubIsDark.svg'
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';



const CornerGithub = () => {


    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    const {toggle} = useContext(ThemeContext)


    return ( 

        <div className={toggle? "cornerGithubContainer":"cornerGithubContainer__isDark"} >
            <a href="https://github.com/santiagovittor/santiagovittorweb" target="_blank" rel="noreferrer" data-aos="zoom-out">
            <img src={toggle? cornerGithubIcon : cornerGithubIconIsDark } alt="link to github repo"/>
            </a>
        </div>

     );
}
 
export default CornerGithub;