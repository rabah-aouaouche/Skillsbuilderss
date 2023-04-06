import React from "react";
import fullstackdev from "../assets/fullstackdev.jpg";

const Skills = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={fullstackdev} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            Des compétences d'aujourd’hui qui ont de l'avenir
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Trouvez la formation qui vous correspond
          </h1>
          <p>
            Faites un grand pas vers votre nouvelle carrière en décrochant une
            certification reconnue. Notre différence ? Une école 100% en ligne
            et un modèle pédagogique unique qui seront les clés de votre
            réussite.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
