import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { About } from "./components/About/About";
import { Introduction } from "./components/About/Introduction";
import { Timeline } from "./components/About/Timeline";
import { Techstacks } from "./components/About/Techstacks";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./context/Theme";
function App() {
  const [{ themename }] = React.useContext(ThemeContext);

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="top" className={`${themename} app`}>
      <Header />
      <main>
        <section id="home">
          <About />
        </section>
        
        <section id="about">
          <Introduction />
        </section>

        <section id="skills">
          <Techstacks />
        </section>

        <Timeline />

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>

  );
}



export default App;
