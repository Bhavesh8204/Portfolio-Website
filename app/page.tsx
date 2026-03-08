import About from "../src/components/about/About";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Home from "../src/components/home/Home";
import Qualification from "../src/components/qualification/Qualification";
import ScrollUp from "../src/components/scrollup/ScrollUp";
import Services from "../src/components/services/Services";
import Skills from "../src/components/skills/Skills";
import Testimonials from "../src/components/testimonials/Testimonials";
import Work from "../src/components/work/Work";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
