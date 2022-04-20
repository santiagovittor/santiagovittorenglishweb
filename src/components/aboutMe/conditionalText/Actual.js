import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CV from '../../../assets/pdfs/santiagoVittorResume.pdf'


const ActualText = () => {

    useEffect(()=>{
        AOS.init({duration:2000})   
       })

    return ( 

        <>
            <p data-aos="fade-right">Mi nombre es Santiago Vittor, tengo 28 años y soy desarrollador frontend especializado en ReactJs.</p>
            <p data-aos="fade-right">Actualmente realizo el módulo de programación backend en Coderhouse, en el que estoy aprendiendo a desenvolverme con NodeJs a través de su framework Express. También estoy adquiriendo nociones de bases de datos no relacionales y trabajando el enlace de mis aplicaciones con MongoDB.</p>
            <p>Puede descargar mi curriculum desde este enlace <span  id="cv"><a href={CV}>CV (159KB)</a></span></p>
        </>

     );
}
 
export default ActualText;