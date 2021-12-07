import './sass/css/estilos.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './components/landingPage/Layout';
import MainText from './components/landingPage/MainText';
import AboutMe from './components/aboutMe/AboutMe';
import { ThemeProvider } from './context/themeContext/ThemeContext';
import PortfolioHome from './components/portfolio/PortfolioHome';
import DigitalKikiPage from './components/portfolio/DigitalKikiPage';
import TheFootballStorePage from './components/portfolio/TheFootballStorePage';
import Contact from './components/contact/Contact';
import SocialMedia from './components/socialMedia/SocialMedia';

function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={MainText} exact />
            <Route path="/about-me" component={AboutMe} exact />
            <Route path="/portfolio" component={PortfolioHome} exact />
            <Route path="/portfolio/thefootballstore" component={TheFootballStorePage} exact />
            <Route path="/portfolio/digitalkiki" component={DigitalKikiPage} exact />
            <Route path="/social-media" component={SocialMedia} exact />
            <Route path="/contact-me" component={Contact} exact />
          </Switch>
          </Layout>
        </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
