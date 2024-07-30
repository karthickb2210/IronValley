import React from 'react'
import { fadeIn } from './variants'
import {motion} from "framer-motion"
function Features() {
  return (
    <div>
    <section class="bg-black">
    <div class="container px-6 py-10 ">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Advantages of  using  <span class="underline decoration-blue-500">ENVITA</span></h1>
        
        
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <motion.h1 variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">10% Mileage Increase</motion.h1>

                <motion.p variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-gray-500 dark:text-gray-300">
                 By using ENVITA we can increase mileage by up to 10% by reducing internal friction, improving lubrication, and keeping the engine clean, leading to more efficient engine operation.               </motion.p>

        
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <motion.h1 variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">2X times increase in engine oil life</motion.h1>

                <motion.p variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-gray-500 dark:text-gray-300">
                By using ENVITA we can double engine oil life by enhancing its lubricating properties and preventing sludge buildup, ensuring the oil maintains its effectiveness for a longer period.                </motion.p>

                
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <motion.h1 variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">42% reduction in friction loss</motion.h1>

                <motion.p variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-gray-500 dark:text-gray-300">
                By using ENVITA we can reduce friction loss by 42% by incorporating advanced friction modifiers that create a smoother interaction between engine components.                </motion.p>

                
            </div>

             <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <motion.h1 variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">6% reduction in CO2 Emission</motion.h1>

                <motion.p variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} class="text-gray-500 dark:text-gray-300">
                By using ENVITA can result in a 6% reduction in CO2 emissions by improving engine efficiency and combustion. Enhanced lubrication and reduced friction lead to more complete fuel burning                </motion.p>

                
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default Features
