import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext } from "react";
import NavBar from "../navBar/NavBar";

const Layout = ({children}) => {

    const {toggle} = useContext(ThemeContext)

    return (

        <section className={toggle ? "landingDisposition" : "landingDisposition__isDark"}>
            {children}
            <NavBar/>
        </section>

    );
}

export default Layout;