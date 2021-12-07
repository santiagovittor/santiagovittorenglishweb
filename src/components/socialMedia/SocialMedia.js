import linkedin from '../../assets/svgs/linkedin.svg'
import whatsapp from '../../assets/svgs/whatsapp.svg'
import facebook from '../../assets/svgs/facebook.svg'
import github from '../../assets/svgs/github.svg'
import gmail from '../../assets/svgs/gmail.svg'

const SocialMedia = () => {
    return ( 
        
        <section className="socialMediaContainer">
            <div className="socialMediaContainer__each">
                <a target="blank" href="https://www.linkedin.com/in/santiago-vittor-862033107/"> 
                <img src={linkedin} alt="linkedin icon" />
                </a>
            </div>
            <div className="socialMediaContainer__each">
                <a target="blank" href="https://api.whatsapp.com/send?phone=+541162300345&text=Hola!"> 
                <img src={whatsapp} alt="whatsapp icon"/>
                </a>
            </div>
            <div className="socialMediaContainer__each">
                <a target="blank" href="https://www.facebook.com/santi.vittor"> 
                <img src={facebook} alt="facebook icon" />
                </a>
            </div>
            <div className="socialMediaContainer__each">
                <a target="blank" href="https://github.com/santiagovittor"> 
                <img src={github} alt="github icon"/>
                </a>
            </div>
            <div target="blank" className="socialMediaContainer__each">
                <a href="mailto:svittordev@gmail.com"> 
                <img src={gmail} alt="gmail icon"/>
                </a>
            </div>
        </section>


     );
}
 
export default SocialMedia;