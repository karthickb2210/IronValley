import React from "react";
import { fadeIn } from "./variants";
import { motion } from "framer-motion";
function Testienvita() {
  return (
    <div>
      <section className=" relative text-gray-800 h-[100vh] mb-44">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 md:text-left">
              <motion.h2
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl font-bold text-white"
              >
                What our customers are saying about our product
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-white"
              >
                We prioritize our customer feedbacks{" "}
              </motion.p>
            </div>
            <div className="p-6 text-[15px] xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      ...I tried this on my old honda activa and was suprised to
                      see the immediate difference in the noise. Now I am loving
                      to ride the bike instead of getting irritated as it was
                      giving bad noise earlier. Mileage wise I can say that it
                      has been increased from 40 to 46.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />

                      <div>
                        <p className="text-lg font-semibold">Mannar</p>
                        <p className="text-sm text-gray-600">Villupuram</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50 mb-10">
                    <p>
                      …I am the owner and driver of Leyland Taurus 10 wheeler,
                      my friend reffered this product and I added them between
                      oil change intervals. I usually mileage around 3.5 km/l
                      due to its high tonnage. After adding envita it gives me
                      around 4 km/l and I'm very happy as it gives me a huge
                      saving. I'l be certainly recommending this to my fellow
                      users…
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Sivaramkrishnan</p>
                        <p className="text-sm text-gray-600">
                          Parangipettai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50 ">
                    <p>
                      …Recently purchased this item after a friend of mine told
                      that it's giving a good result. So, just tried as soon I
                      recieved it on my hyundai Creta 1.6 l petrol vehicle.
                      Initially in highway I tried it without adding this at 80
                      km/h and I got a mileage of 16.7km/l and I added one
                      bottle (180ml as it says) to the engine oil and again
                      drover the car at the same speed and then checked the
                      mileage which raised to 18.3 km/l. It's almost a 10%
                      percent increase. Yet to test more…
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Rajiv Raj</p>
                        <p className="text-sm text-gray-600">Nolambur</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50 ">
                    <p>
                      …I run a car mechanic workshop and I use fully synthetic
                      engine oils for all the customers vehicles. I know the
                      value addition of esters and nano particles as they help
                      to provide good results on cars performance and fuel
                      savings. After trying on my own vehicle I have come to an
                      decision that I can recommend this to my customers. …
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />

                      <div>
                        <p className="text-lg font-semibold">Shiva</p>
                        <p className="text-sm text-gray-600">
                          Kolathur, Chennai{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testienvita;
