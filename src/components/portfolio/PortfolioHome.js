import CornerGithub from "../cornerGithub/CornerGithub";
import Projects from "./Projects";

const PortfolioHome = () => {

    return ( 
        <>
        <CornerGithub/>
        <div className="portfolioTitle">
        <h1>Portfolio</h1>
        </div>
        <Projects/>
        </>
     );
}
 
export default PortfolioHome;