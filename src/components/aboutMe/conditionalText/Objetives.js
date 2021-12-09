import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Objetives = () => {
    
    useEffect(()=>{
     AOS.init({duration:2000})   
    })

    return ( 

        <>
        <p data-aos="fade-right" >Estoy en búsqueda de inspiración, sumando conocimiento y herramientas para plasmar mi mente en mis proyectos</p>
        <p data-aos="fade-right">Entiendo que el aprendizaje es constante e ilimitado y busco con ansias mi primer oportunidad laboral en un sector afín para poder trabajar junto a gente con experiencia que me ayude a crecer como profesional.</p>
        </>

     );
}
 
export default Objetives;