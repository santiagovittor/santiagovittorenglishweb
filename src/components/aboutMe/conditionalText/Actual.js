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
            <p data-aos="fade-right">Mi nombre es Santiago Vittor, tengo 28 años y soy desarrollador front end.</p>
            <p data-aos="fade-right">Actualmente me encuentro promediando la carrera de desarrollo full-stack en Coderhouse, finalicé el curso de ReactJs y estoy próximo a iniciar el módulo de programación backend, en el que aprenderé a desenvolverme con tecnologías como mongoDB, Express y NodeJs.</p>
            <p data-aos="fade-right">Puede descargar mi curriculum desde este enlace <span id="cv"><a href={CV}>CV (539kb)</a></span></p>
        </>

     );
}
 
export default ActualText;