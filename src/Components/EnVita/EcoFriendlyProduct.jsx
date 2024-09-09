import React from "react";
import krc from "./krc.png";
import ecotree from "./ecotree.png";
const EcoFriendlyProduct = () => {
  return (
    <div className=" text-white p-8 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out xl:mx-28">
      <h2 className="text-3xl font-bold mb-4 text-center hover:text-green-600 transition-colors duration-300">
        Eco-Friendly Engine Oil Additive
      </h2>
      <p className="text-lg mb-6 text-center hover:text-gray-600 transition-colors duration-300">
        Experience the difference with our engine oil additive that not only
        enhances your vehicle's performance but also contributes to a healthier
        planet.
      </p>

      <div className="flex flex-col items-center mb-6">
        <div className="bg-green-100 p-4 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
          <img
            src="data:image/jpeg;base64,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" // Replace with actual image URL
            alt="Eco-Friendly"
            className="h-16 w-16  object-fill"
          />
        </div>

        <div className="grid grid-cols-3 relative gap-6">
          <div className=" bg-transparent mb-12">
            <img src={ecotree} alt="Tree" />
          </div>
          <div>
            <ul className="text-center text-md mb-6 space-y-2">
              <li className="hover:text-green-600 transition-colors duration-300">
                🌱 Reduces harmful emissions by up to 30%
              </li>
              <li className="hover:text-green-600 transition-colors duration-300">
                🚗 Enhances engine efficiency and longevity
              </li>
              <li className="hover:text-green-600 transition-colors duration-300">
                🌍 Biodegradable and environmentally friendly formula
              </li>
              <li className="hover:text-green-600 transition-colors duration-300">
                💧 Improves fuel economy by optimizing combustion
              </li>
              <li className="hover:text-green-600 transition-colors duration-300">
                🛡️ Protects engine parts, reducing wear and tear
              </li>
            </ul>
          </div>
          <div>
            <img src={ecotree} />
          </div>
        </div>
      </div>

      <div className="w-full text-white  p-4 rounded-lg mt-8">
        <h3 className="text-2xl font-bold text-center mb-4">
          Korean Register ( KR ) Certification
        </h3>
        <p className="text-lg text-center mb-4">
          The Korean Register (KR) is a not-for-profit classifiction society
          founded in south korea offering verification and certification for
          ships and marine structures in terms of design ,construction and
          maintenance.
        </p>
        <div className="flex justify-center">
          <img
            src={krc} // Replace with actual image URL
            alt="Certification Badge"
            className=" transform xl:max-w-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlyProduct;
