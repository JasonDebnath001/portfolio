import React from "react";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
