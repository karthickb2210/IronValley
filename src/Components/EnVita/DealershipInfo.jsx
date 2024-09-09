import React from 'react';

const DealershipInfo = () => {
  return (
    <div className="flex justify-center items-center bg-transparent mt-12">
      <div className="bg-zinc-600  bg-opacity-50 p-6 rounded-lg shadow-lg w-full max-w-7xl mx-20 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
          Interested in a Dealership?
        </h2>
        <div className="text-lg">
          <p className="text-white mb-2 md:mb-0">
            Contact us for further details:
          </p>
          <p className="font-semibold text-gray-800">
            Call:
            <a href="tel:+919361597316" className="text-white font-bold hover:underline ml-1">
              +91 9361597316
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealershipInfo;
