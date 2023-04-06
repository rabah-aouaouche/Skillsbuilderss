import React from "react";

import Search from "../components/SearchDiv/Search";
import Formation from "../components/FormationDiv/Formation";
import Value from "../components/ValueDiv/Value";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterDiv/Footer";



function Formations() {
  return (
    <div className='w-[85%] m-auto  bg-[#000]'>
      <Navbar/>
      <Search/>
      <Formation/>
      <Value/>
      <Footer/>
    </div>
  );
}

export default Formations;