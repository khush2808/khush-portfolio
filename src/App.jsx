import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skills from "./components/skills/Skills";
import Certification from "./components/certifications/Certification";

const App = () => {
  
  return <div>
    <Cursor></Cursor>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section id="Skills"><Parallax  type="skills"/></section>

    <section><Skills/></section>

    <section id="Certification"><Parallax  type="certification"/></section>

    <section><Certification/></section>
    
    


    <section id="Portfolio"><Parallax type="portfolio"/></section>

    <Portfolio/>

    <section id="Contact"><Contact></Contact></section> 
    
   
    
    
    
    </div>;
};

export default App;
