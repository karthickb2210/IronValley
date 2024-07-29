import React from 'react'
import "./offerservice.css"
function OfferedServices() {

    

  return (
    <div>
      <section class="min-h-screen text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
  <span class="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">what we're offering <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-600 ml-3 w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </span>
  <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1>
  <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
    <div class="card bg-gray-800 p-10 relative ">
      <div class="circle">
      </div>
      <div class="relative lg:pr-52 ">
        <h2 class=" px-2 py-2 capitalize text-white mb-4 text-2xl xl:text-3xl">Optimal <br /> Solution</h2>
        <p class="text-white px-2 py-2 ">Conducting thorough market and SWOT analyses helps identify opportunities and threats, while stakeholder input ensures alignment with broader organizational needs.</p>
      </div>
      <div class="icon"></div>
    </div>
    <div class="card bg-gray-800 p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pl-48">
        <h2 class="capitalize text-white px-2 py-2  mb-4 text-2xl xl:text-3xl">Best Value<br /> Proposition </h2>
        <p class="text-white px-2 py-2 ">This process begins with a deep understanding of the customer's needs, pain points, and preferences. By differentiating the company's offerings from competitors.</p>
      </div>
    </div>
    <div class="card bg-gray-800 p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pr-44">
        <h2 class="capitalize px-2 py-2  text-white mb-4 text-2xl xl:text-3xl">Reliable E & P<br />Service</h2>
        <p class="text-white px-2 py-2 ">Highlighting investments in cutting-edge exploration technologies, efficient production methods, and proactive environmental management .</p>
      </div>
    </div>
    <div class="card bg-gray-800 p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pl-48">
        <h2 class="capitalize text-white px-2 py-2  mb-4 text-2xl xl:text-3xl">Diverse<br /> team</h2>
        <p class="text-gray-400 px-2 py-2 "> Embracing diversity in terms of ethnicity, gender, age, cultural background, and professional experience fosters an inclusive environment where all employees feel valued.</p>
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default OfferedServices
