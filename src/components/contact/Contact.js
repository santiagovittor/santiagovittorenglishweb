import ContactForm from "./ContactForm";
import { ThemeContext } from "../../context/themeContext/ThemeContext";
import { useContext } from "react";


const Contact = () => {
    
    const { toggle } = useContext(ThemeContext);

    
    return ( 

        <div className={toggle?"contactContainer":"contactContainer__isDark"}>
            <ContactForm/>
        </div>

     );
}
 
export default Contact;
