import React from "react";
import avis2 from "../assets/avis2.png";
import avis10 from "../assets/avis10.png";
import avis20 from "../assets/avis20.png";
import avis30 from "../assets/avis30.png";
import avis40 from "../assets/avis40.png";

const Avis = () => {
  return (
    <div className=" w-full bg-[#00C1A5] py-16 px-4 mb-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={avis2} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#fff] font-bold ">
            Nos éléves nous donnent de leurs nouvelles
          </p>
          <h1 className="text-[#fff] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Chloé
          </h1>
          <p className="text-[#fff]">
            «Ma formation m’a beaucoup plu parce qu’elle était très adaptée à
            mes contraintes de temps et d’organisation ! Tout est fait à
            distance, mais je me sentais quand même très accompagnée, parce que
            toutes les semaines, j’avais rendez-vous avec mon mentor. Chez
            OpenClassrooms, on est suivi tout le temps.»
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avis;
