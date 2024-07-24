import React from "react";
import "./about.css";


function About() {
  return (
    <div className="flex justify-center items-center mt-36 mb-36">
      <div className=" flex-row space-y-[170px]">
        <div class="group flex flex-col justify-start items-start gap-2 mx-32 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
          <div
            alt="image here"
            class=" max-w-[400px] max-h-[200px]  absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
          >
            <img
              className=" rounded-md w-[700px] h-[200px]"
              src="https://t3.ftcdn.net/jpg/08/11/52/46/240_F_811524674_pAWLA5tyOYlfLsbFJyemzPCAwjBCXqGd.jpg"
            />
          </div>

          <div class="">
            <h2 class="text-2xl font-bold mb-2 text-gray-100">
              Engineering and Procurement
            </h2>
            <p class="text-gray-200 line-clamp-3">
              Strategic procurement | MRO spares | Oil & Gas, Petrochemical,
              Metal processing and Mining industries| Tenders' procurement |
              Customized products & systems | Design & Development| Expediting &
              Delivery services | Alternate solutions for Obsolete products |
              HAZOP, HAZID, SIL studies, Alarm Rationalization | Transformer
              erection, commissioning, testing & maintenance services .
            </p>
          </div>
          <button class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6">
            Explore
          </button>
        </div>

        <div class="group flex flex-col justify-start items-start gap-2 mx-32 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
          <div
            alt="image here"
            class="  max-w-[400px] max-h-[200px]   absolute duration-700 shadow-md group-hover:-translate-x-4 group-hover:-translate-y-4 -bottom-10 -left-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
          >
            <img
              className=" rounded-md w-[700px] h-[200px]"
              src="https://t4.ftcdn.net/jpg/07/27/71/17/240_F_727711769_waPwBHNBZ7o7ShUWKfmb1cD1XPRrd5Em.jpg"
            />
          </div>

          <div class="">
            <h2 class="text-2xl font-bold mb-2 text-gray-100">
              Workforce & Manpower
            </h2>
            <p class="text-gray-200 line-clamp-3">
              Manpower sourcing & consultancy services | High profile
              technologists | Engineers | Skilled workforce.{" "}
            </p>
          </div>
          <div>
            {/* <button class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 relative bottom-4 rounded p-2 px-6 ">
              Explore
            </button> */}
          </div>
        </div>

        <div class="group flex flex-col justify-start items-start gap-2 mx-32 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
          <div
            alt="image here"
            class=" max-w-[400px] max-h-[200px]   absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
          >
            <img className=" rounded-md w-[700px] h-[200px]" src="https://t3.ftcdn.net/jpg/07/21/59/32/240_F_721593271_mUXtEEfYyXzktRH4qrmBJDFgeTMDcOY7.jpg" />
          </div>

          <div class="">
            <h2 class="text-2xl font-bold mb-2 text-gray-100">
              Advanced Process Solutions
            </h2>
            <p class="text-gray-200 line-clamp-3">
              Predictive Reliability Advisory of Equipment and processes |
              Conditional Monitoring | Advance Process Monitoring | Static &
              Dynamic Process Simulation services ( Using Honeywell UNISIM and
              Aspen Hysys) | CFD Analysis (ANSYS, FLUENT){" "}
            </p>
          </div>
          <button class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6">
            Explore
          </button>
        </div>
        <div class="group flex flex-col justify-start items-start gap-2 mx-32 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
          <div
            alt="image here"
            className="  max-w-[400px] max-h-[200px]   absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -left-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
          >
            <img
              className=" rounded-md w-[700px] h-[200px]"
              src="https://t3.ftcdn.net/jpg/07/10/39/98/240_F_710399857_zDje1dt9QUhki3l0RYaozwXgWahyZ5qO.jpg"
            />
          </div>

          <div class="">
            <h2 class="text-2xl font-bold mb-2 text-gray-100">
              CEA & Hydroponics
            </h2>
            <p class="text-gray-200 line-clamp-3">
              Strategic procurement | MRO spares | Oil & Gas, Petrochemical,
              Metal processing and Mining industries| Tenders' procurement |
              Customized products & systems | Design & Development| Expediting &
              Delivery services | Alternate solutions for Obsolete products |
              HAZOP, HAZID, SIL studies, Alarm Rationalization | Transformer
              erection, commissioning, testing & maintenance services .
            </p>
          </div>
          <div>
            {/* <button class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 bottom-4  rounded p-2 px-6 ">
              Explore
            </button> */}
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default About;
