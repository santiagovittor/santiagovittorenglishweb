import './sass/css/estilos.css'
import { useEffect } from 'react';
import {  Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from './context/themeContext/ThemeContext';
import Layout from './components/landingPage/Layout';
import MainText from './components/landingPage/MainText';
import AboutMe from './components/aboutMe/AboutMe';
import PortfolioHome from './components/portfolio/PortfolioHome';
import DigitalKikiPage from './components/portfolio/DigitalKikiPage';
import TheFootballStorePage from './components/portfolio/TheFootballStorePage';
import Contact from './components/contact/Contact';
import SocialMedia from './components/socialMedia/SocialMedia';



function App() {

  const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
}, [location]);


  return (
    <ThemeProvider>
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
    </ThemeProvider>

  );
}

export default App;
