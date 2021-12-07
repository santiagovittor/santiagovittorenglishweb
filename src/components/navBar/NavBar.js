import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext } from "react";
import turnOn from '../../assets/svgs/turnOn.svg'
import turnOff from '../../assets/svgs/turnOff.svg'
import contact from '../../assets/svgs/contact.svg'
import contactDark from '../../assets/svgs/contactDark.svg'
import aboutMe from '../../assets/svgs/aboutMe.svg'
import aboutMeDark from '../../assets/svgs/aboutMeDark.svg'
import portfolio from '../../assets/svgs/portfolio.svg'
import portfolioDark from '../../assets/svgs/portfolioDark.svg'
import home from '../../assets/svgs/home.svg'
import homeDark from '../../assets/svgs/homeDark.svg'
import socialNetworks from '../../assets/svgs/socialNetworks.svg'
import socialNetworksDark from '../../assets/svgs/socialNetworksDark.svg'


import { NavLink } from "react-router-dom";




const NavBar = () => {
    const { toggle, toggleFunction } = useContext(ThemeContext);

    return ( 

        <div className={toggle ? "navBarContainer" : "navBarContainer__isDark"}>
        <ul>
            <li>{toggle ? <img src={turnOff} id="lightBulb" onClick={toggleFunction} alt="set dark theme icon" /> : <img src={turnOn} id="lightBulb" onClick={toggleFunction} alt="set light theme icon" />}</li>
            <li>{toggle ? <NavLink to="/about-me"><img src={aboutMe} alt="about me icon" /></NavLink> :  <NavLink to="/about-me"><img src={aboutMeDark} alt="about me dark icon" /></NavLink>}</li>
            <li>{toggle ? <NavLink to="/"><img src={home} alt="home icon" /></NavLink> : <NavLink to="/"><img src={homeDark} alt="home dark icon" /></NavLink>}</li>
            <li>{toggle ? <NavLink to="/portfolio"><img src={portfolio} alt="portfolio icon" /></NavLink> : <NavLink to="/portfolio"><img src={portfolioDark} alt="portfolio dark icon" /></NavLink>}</li>
            <li>{toggle ? <NavLink to="/social-media"><img src={socialNetworks} alt="social media icon" /></NavLink> : <NavLink to="/social-media"><img src={socialNetworksDark} alt="portfolio dark icon" /></NavLink>}</li>
            <li>{toggle ? <NavLink to="/contact-me"><img src={contact} alt="contact me icon" /></NavLink> : <NavLink to="/contact-me"><img src={contactDark} alt="contact me dark icon" /></NavLink>}</li>
        </ul>
    </div>

     );
}
 
export default NavBar;

    
