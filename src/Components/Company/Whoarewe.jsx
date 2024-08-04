import React from "react";

export default function Whoarewe() {
  return (
    <div>
      <section class="text-gray-400 bg-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class=" text-4xl font-medium title-font text-white mb-16">Who are we?
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Our Aim</h2>
          <ul className=" list-image-none space-y-2">
          <li>
          <p class="leading-relaxed text-base ">We Strive to deliver excellence in specialized procurement services & more.
          </p></li>
          <li>
          <p className=" leading-relaxed text-base"> In a broader spectrum we deal will range of product sourcing in Instrumentation, electrical, mechanical and electronics
          </p></li></ul>
          {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More */}
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Our Expertise</h2>
          <p class="leading-relaxed text-base">We are experts in strategic sourcing of key products in any kind of processing industries.
          <br/>We also provide various specialized Engineering services pertinent to Oil and gas, petrochemical and other types of process industries.</p>
          {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Our Team</h2>
          <p class="leading-relaxed text-base">Our diverse team boasts technologists specializing in the process of HCK, Olefins, SRU, CDU, VDU.
          <br/>We represent a highly skilled team of engineers spanning electrical, mechanical, chemical, information technology and instrumentation.

          </p>
          {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
