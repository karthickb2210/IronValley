import React from "react";
import logo from "./logo.jpg";
import Header from "../../Componen/Header";
function HeadLine() {
  return (
    <>
      <Header />
      <div className="flex flex-row gap-16 justify-center py-24 mt-32 ">
        <div class="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-slate-900  text-gray-50 p-5">
          <div class=" bg-current">
            <div class="group-hover:scale-110 w-full bg-current h-60 bg-black duration-500">
              <img src={logo} alt="image" />
            </div>
            <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 bg-black duration-500 group-hover:opacity-50 group-hover:bg-black"></div>
              <span class="text-xl font-bold">Innovate Invent Implement </span>
              <p class="group-hover:opacity-80 w-56 duration-500 opacity-0">
                The motive we follow on our company
              </p>
            </div>
          </div>
        </div>

        <div class="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-slate-900 text-gray-50 p-5">
          <div class="">
            <div class="group-hover:scale-110 w-full bg-current h-60 bg-black duration-500">
              <img
                src="https://www.ivsourcing.com/images/5%20years.PNG"
                alt="image"
              />
            </div>
            <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 bg-black duration-500 group-hover:opacity-50 group-hover:bg-black"></div>
              <span class="text-xl font-bold">DPIIT
RECOGNIZED
STARTUP</span>
              <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
                We are in the industry for more tha 5 years
              </p>
            </div>
          </div>
        </div>

        <div class="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-slate-900 text-gray-50 p-5">
          <div class="">
            <div class="group-hover:scale-110 w-full h-60 bg-current bg-black duration-500">
              <img
                src="https://www.ivsourcing.com/images/AGILE%20E%20AND%20P.jpeg"
                alt="image"
              />
            </div>
            <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 bg-black duration-500 group-hover:opacity-50 group-hover:bg-black"></div>
              <span class="text-xl font-semibold">Agile E & P Company</span>
              <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
                We follow agile methodologies for implementation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadLine;
