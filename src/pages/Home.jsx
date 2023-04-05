import React from "react";

import Skills from "../components/skills";
import Newsletter from "../components/Newsletter";
import Cards from "../components/cards";
import Hero from "../components/hero";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default Home;
