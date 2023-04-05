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
            javascript is the heeell
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quisquam a quaerat esse quo! Et, expedita nulla asperiores iure
            libero, atque, sunt fugiat ullam deleniti delectus eos. Quam, ab
            dolor?
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
