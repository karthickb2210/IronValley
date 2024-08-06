import React, { useState } from "react";

export default function Contactform() {
  const [val, setVal] = useState({
    fname: "",
    lname: "",
    mail: "",
    num: "",
    msg: "",
  });

  let { fname, lname, mail, num, msg } = val;
  const onInputChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    alert("Form Submitted Succesfully")
    console.log(val);
  };
  return (
    <div class=" relative flex justify-center my-24 items-center ">
      <div class="container mx-auto my-4 px-4 lg:px-20">
        <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="flex">
            <h1 class="font-bold uppercase text-5xl text-white">
              Send us a  message
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) => onInputChange(e)}
              name="fname"
              value={fname}
              placeholder="First Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) => onInputChange(e)}
              name="lname"
              value={lname}
              placeholder="Last Name"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              onChange={(e) => onInputChange(e)}
              name="mail"
              value={mail}
              placeholder="Email*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              onChange={(e) => onInputChange(e)}
              name="num"
              value={num}
              placeholder="Phone*"
            />
          </div>
          <div class="my-4">
            <textarea
              name="msg"
              value={msg}
              onChange={(e) => onInputChange(e)}
              placeholder="Message*"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              onClick={handleSubmit}
              class="uppercase text-sm font-bold tracking-wide bg-zinc-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>

        <div class="w-full lg:-mt-96 lg:w-2/6 px-7 py-12 ml-auto bg-zinc-700 rounded-2xl">
          <div class="flex flex-col text-white">
            <h1 class="font-bold uppercase text-4xl my-4">
              Drop in our office
            </h1>
            <p class="text-white">
              Visit the office anytime between 10:00 AM and 5:00 PM from Monday
              to Friday. Please feel free to reach out to schedule a convenient
              time within this timeframe.
            </p>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <h2 class="text-2xl">Main Office</h2>
                <p class="text-white">
                  37G3+GH6, <br /> Poosala Gangu St, Egmore, Chennai, Tamil
                  Nadu-600008
                </p>
              </div>
            </div>

            <div class="flex my-4 ">
              <div class="flex flex-col">
                <i class="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <h2 class="text-2xl">Call Us</h2>
                <p class="text-white">Tel : +91 44 4794 8492</p>
                <p class="text-white">Mob: +91 95000 04963</p>
              </div>
            </div>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <a
                href="https://www.linkedin.com/company/ironvalley-solutions-llp/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                class="rounded-full  h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.facebook.com/p/Ironvalley-Solutions-LLP-100067656481746/"
                target="_blank"
                rel="noreferrer"
                class="rounded-full  h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
