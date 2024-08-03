import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../EnVita/variants'
function SingleProduct({prop}) {
  return (
    <div class=" flex  items-center text-gray-900 ">
          <div>
            <img
              src={prop.img}
              width="320"
              height="300"
              alt=" random imgee"
              class=" relative object-center transition hover:scale-105 hover:-translate-y-12 duration-900 rounded-lg shadow-md"
            />

            <div class="relative px-4 -mt-16   ">
              <div class=" bg-neutral-300  p-6 rounded-lg shadow-lg ">
                <div class=" flex items-baseline">
                  <span  viewport={{once:false,amount:0.7}}  class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Available
                  </span>
                  <motion.div variants={fadeIn('right',0.1)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}  class="ml-2 text-white rounded-md px-1 font-bold uppercase text-xs bg-black tracking-wider">
                    {prop.code}
                  </motion.div>
                </div>

                <motion.h4 variants={fadeIn('right',0.1)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}  class="mt-1 text-wrap text-xl font-semibold uppercase leading-tight truncate">
                  {prop.name}
                </motion.h4>

                <div class="mt-1">
                  <motion.ul variants={fadeIn('right',0.1)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}  className="mx-1">
                    <li className=" list-disc">{prop.l1}</li>
                    <li className="list-disc">
                      {prop.l2}
                    </li>
                    <li className=" list-disc">
                      {prop.l3}
                    </li>
                    
                  </motion.ul>
                </div>
                {/* <div class="mt-4">
                  <span class="text-teal-600 text-md font-semibold">
                    4/5 ratings{" "}
                  </span>
                  <span class="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
  )
}

export default SingleProduct
