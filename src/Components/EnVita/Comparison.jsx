import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
function Comparison() {
  return (
    <div className="h-[100vh] relative mx-12">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className=" text-white text-6xl my-12 text-center">What makes us different from others</h1>
        <section className="text-white flex justify-center items-center">
          <div className="container mx-auto p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th></th>
                  <th scope="col">
                    <div className="mx-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                      <h2 className="p-1 text-xl font-medium ">Envita</h2>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="mx-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                      <h2 className="p-1 text-xl font-medium">
                        Semi Synthetic
                      </h2>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="mx-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                      <h2 className="p-1 text-xl font-medium ">
                        Fully Synthetic
                      </h2>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="mx-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                      <h2 className="p-1 text-xl font-medium ">Ester Based</h2>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-6 text-center font-medium text-xl divide-y dark:divide-gray-300">
                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-6 ">Price </h3>
                  </th>
                  <td>
                    <span className="block ">High</span>
                  </td>
                  <td>
                    <span className="block ">Low</span>
                  </td>
                  <td>
                    <span className="block ">Medium</span>
                  </td>
                  <td>
                    <span className="block ">High</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-6">Quality / Performance</h3>
                  </th>
                  <td>
                    <span className="block">Better</span>
                  </td>
                  <td>
                    <span className="block">Medium</span>
                  </td>
                  <td>
                    <span className="block">High</span>
                  </td>
                  <td>
                    <span className="block">Better</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-6">Ester Components</h3>
                  </th>

                  <td>
                    <span className="block">&#62; 5.0%</span>
                  </td>

                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Not included in Free plan"
                      className="w-5 h-5 mx-auto dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Not included in Free plan"
                      className="w-5 h-5 mx-auto dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <span className="block ">&#60; 2.5%</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-6">Nano Silica Particles</h3>
                  </th>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Not included in Free plan"
                      className="w-5 h-5 mx-auto dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Not included in Free plan"
                      className="w-5 h-5 mx-auto dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Not included in Free plan"
                      className="w-5 h-5 mx-auto dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-label="Included in Premium plan"
                      className="w-5 h-5 mx-auto dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default Comparison;
