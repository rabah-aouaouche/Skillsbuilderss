import React from "react";

import Skills from "../components/skills";
import Newsletter from "../components/Newsletter";
import Cards from "../components/cards";

import Navbar from "../components/Navbar";
import Footer from "../components/FooterDiv/Footer";
import Hero from "../components/Hero";
import Avis from "../components/Avis";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Newsletter />
      <Cards />
      <Avis />
      <Footer />
    </div>
  );
}

export default Home;
