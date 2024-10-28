import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CV from '../../../assets/pdfs/SantiagoVittor2024Resume.pdf'


const ActualText = () => {

    useEffect(()=>{
        AOS.init({duration:2000})   
       })

    return ( 

        <>
            <p data-aos="fade-right">My name is Santiago Vittor, I am 31 years old, and I am a frontend developer specialized in React.</p>
            <p data-aos="fade-right">I am currently pursuing a Technical Degree in Information Systems with a specialization in Game Development at Universidad Kennedy. I also work as a Squad Leader and DRQQA at FoodStyles. My expertise lies in web development with React, focusing on creating efficient and scalable solutions. As a squad leader at FoodStyles, I lead teams toward process optimization and the delivery of high-quality products, always maintaining smooth and results-oriented collaboration</p>
            <p>You can download my latest resume from this link: <span  id="cv"><a href={CV}>Resume (159KB)</a></span></p>
        </>

     );
}
 
export default ActualText;