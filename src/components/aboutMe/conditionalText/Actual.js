import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CV from '../../../assets/pdfs/santiagoVittorResume2024.pdf'


const ActualText = () => {

    useEffect(()=>{
        AOS.init({duration:2000})   
       })

    return ( 

        <>
            <p data-aos="fade-right">Mi nombre es Santiago Vittor, tengo 31 años y soy desarrollador frontend especializado en React.</p>
            <p data-aos="fade-right">Actualmente estoy cursando la Tecnicatura en Sistemas de información con orientación en Desarrollo de Videojuegos en la Universidad Kennedy. También me desempeño como Squad Leader y DRQQA en la empresa FoodStyles. Me especializo en el desarrollo web con React, con un enfoque en la creación de soluciones eficientes y escalables. Como squad leader en Foodstyles, lidero equipos hacia la optimización de procesos y la entrega de productos de alta calidad, siempre manteniendo una colaboración fluida y enfocada en resultados.</p>
            <p>Puede descargar mi curriculum desde este enlace <span  id="cv"><a href={CV}>CV (159KB)</a></span></p>
        </>

     );
}
 
export default ActualText;