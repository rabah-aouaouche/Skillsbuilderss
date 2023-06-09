import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/Double.png";
import Triple from "../assets/Triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-fill shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">3 Mois</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">Front-end</p>
            <p className="py-2 border-b mx-8 ">HTML/ CSS/ JAVASCRIPT</p>
            <p className="py-2 border-b mx-8 "> Dev front-end</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 ">
            Je Me Lance
          </button>
        </div>
        <div className="w-fill shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">6 Mois</h2>
          <p className="text-center text-4xl font-bold">$200</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">Back-end</p>
            <p className="py-2 border-b mx-8 ">Node.js/ Express/ DataBase</p>
            <p className="py-2 border-b mx-8 "> Dev backend</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">
            Je Me Lance
          </button>
        </div>
        <div className="w-fill shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">12 mois</h2>
          <p className="text-center text-4xl font-bold">$300</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">Full-stack</p>
            <p className="py-2 border-b mx-8 ">Front et back-end </p>
            <p className="py-2 border-b mx-8 "> Dev full-stack</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 ">
            Je Me Lance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
