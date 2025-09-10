import React, { useEffect } from "react";
import { Element } from "react-scroll";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import ContactForm from "../Components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <NavBar />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <ContactForm />
      </Element>
      <Footer />
    </>
  );
};

export default Home;
