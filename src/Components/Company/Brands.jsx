import React from "react";
import llpcer from "./images/llpcertificate.jpg"
function Brands() {
  return (
    <>
      <h1 className=" text-6xl my-24 text-center text-white capitalize"> Certifications</h1>
    
    <div className=" flex justify-center items-center">
    
      <img
        src={llpcer}
        class="max-w-2xl mb-20 rounded border  p-1 border-neutral-700 "
        alt="..."
      />
    </div>
    </>
  );
}

export default Brands;
