import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Objetives = () => {
    
    useEffect(()=>{
     AOS.init({duration:2000})   
    })

    return ( 

        <>
        <p data-aos="fade-right" >Estoy constantemente en busca de nuevas experiencias y sumando herramientas a mi set de skills.</p>
        <p data-aos="fade-right">En mi carrera, me motiva seguir creciendo como líder y desarrollador, buscando continuamente perfeccionar mis habilidades en tecnologías emergentes. Mis próximos objetivos incluyen profundizar en arquitectura de software y cloud computing, con el propósito de construir aplicaciones aún más robustas y eficientes. Valoro el trabajo en equipo, la curiosidad por aprender, y me comprometo con la calidad en cada proyecto, siendo siempre fiel a mis principios de responsabilidad y lealtad</p>
        </>

     );
}
 
export default Objetives;