import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Objetives = () => {
    
    useEffect(()=>{
     AOS.init({duration:2000})   
    })

    return ( 

        <>
        <p data-aos="fade-right" >My primary goal is to continuously evolve as a frontend developer, building intuitive and impactful web applications that enhance user experience. I’m currently deepening my knowledge in Information Systems at Universidad Kennedy, set to complete in 2026, and I'm passionate about applying this education to create solutions that bridge technology and user needs.</p>
        <p data-aos="fade-right">As I move forward, I look forward to connecting with international teams, expanding my technical toolkit, and making a meaningful impact in the tech industry.</p>
        </>

     );
}
 
export default Objetives;