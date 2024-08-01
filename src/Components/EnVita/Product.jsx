import React from "react";
import envitalogo from "./envit.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
function Product() {
  return (
    <section class="flex flex-col justify-center antialiased bg-black text-gray-200 min-h-screen">
      <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <a class="relative block group" href="#0">
            <div
              class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
              aria-hidden="true"
            ></div>
            <figure class="relative h-0 pb-[56.25%] md:pb-[75%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
              <img
                class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={envitalogo}
                width="540"
                height="303"
                alt="Blog post"
              />
            </figure>
          </a>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <header className="">
              <div class="mb-3">
                <ul class="flex flex-wrap text-xs font-medium -m-1">
                  <li class="m-1">
                    <div
                      class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Additive
                    </div>
                  </li>
                  <li class="m-1">
                    <a
                      class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Engineering
                    </a>
                  </li>
                </ul>
              </div>
              <h3 class="text-2xl lg:text-4xl font-bold leading-tight mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                >
                  ENVITA
                </a>
              </h3>
            </header>
            <h3 className=" text-[20px]">"Breathe new life into your engine with Nano O-SMB engine oil additive Np 501"</h3>
            <p class="text-lg text-gray-400 flex-grow">
              You can convert any type of your engine oil into a super-premium
              one with even better position than the best oil available in
              market. That too in a much lesser price.
            </p>
            <footer class="flex items-center mt-4">
              <div>
                <span class="text-gray-700"> - </span>
                <span class="text-gray-500">exclusively imported & marketed in India by Iron Valley Solutions</span>
              </div>
            </footer>
          </motion.div>
        </article>
      </div>
    </section>
  );
}

export default Product;
