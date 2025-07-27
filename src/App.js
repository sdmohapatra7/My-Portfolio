import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { About } from "./components/About/About";
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
      {/* ✅ Header should NOT be inside a section */}
      <Header />

      <main>
        {/* Add id="home" here if needed for scroll target */}
        <section id="home">
          {/* You can add a hero or intro component here if needed */}
        </section>

        <About />

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
