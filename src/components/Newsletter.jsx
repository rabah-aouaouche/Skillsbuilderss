import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Voulez-vous des astuces et des conseils pour optimiser votre niveau
            ?
          </h1>
          <p>Inscrivez-vous à notre newsletter et restez à jour.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black "
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto ml-4 px-6 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            Nous attachons de l'importance à la protection de vos données. Lisez
            notre <span className="text-[#00df9a]">privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
