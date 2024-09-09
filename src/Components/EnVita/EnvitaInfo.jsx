import React from 'react';
import eco from "./eco.png"
const EnvitaInfo = () => {
  return (
    <div className="bg-transparent relative text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      {/* Image placeholder */}
      <div className="mb-6 flex justify-center">
        <img 
          src={eco} 
          alt="Envita Nano SMB" 
          className="w-full max-w-sm rounded-xl shadow-md transition duration-500 hover:scale-110" 
        />
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-6">
        Envita Nano SMB - Save Nature, Save Oil, Save Money
      </h2>
      <p className="text-xl text-center mb-4 font-semibold">
        For every <span className="text-zinc-500">1 liter of engine oil</span>, mix
        <span className="text-zinc-500"> 40 ml of Envita Nano SMB</span>.
      </p>
      <p className="text-xl text-center mb-4 font-semibold">
        Adding <span className="text-zinc-500">50 ml of Envita</span> is equivalent to
        planting <span className="text-green-600">3 big trees per year</span>!
      </p>
      <div className="bg-zinc-100 p-6 rounded-lg border-l-4 transition duration-500 hover:scale-105 border-zinc-600 mb-6">
        <p className="text-lg text-black text-center">
          If you are unable to plant trees and maintain them, at least you can use Envita and control CO2 emissions,
          helping to save nature!
        </p>
      </div>
      <p className="text-center text-xl font-bold text-green-600">
        Envita's Motto:
      </p>
      <p className="text-center text-2xl font-extrabold text-white mt-2">
       " Save Nature! Save Oil! Save Money! "
      </p>
    </div>
  );
};

export default EnvitaInfo;
