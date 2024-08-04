import React from "react";
import Navbar from "./Navbar";
import {motion} from "framer-motion"
import { fadeIn  } from "../Components/EnVita/variants"; 
function Header() {
  return (
    <>
    <div className="text-white  relative">
     <Navbar />
      <div className="">
      {/* <Nav /> */}
    
      <div className="2xl:my-36">
        <div className=" justify-center items-center ">
          <div className="flex justify-between ">
            {/* Text */}
            <div className="mx-8 my-12">
              <motion.div variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className="text-6xl ml-12 font-bold flex items-center ">
                IronValley Solutions
              </motion.div>
              <motion.div variants={fadeIn('right',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className="text-md max-w-[800px] my-8 ml-12 text-justify">
                We are a 6-year-old Startup recognized by DPIIT (Department for
                Promotion of Industry and Internal Trade, India). As an Agile
                Engineering and Procurement Company we render various services
                to the clients located in different parts of the world. As an
                E&P Service provider we majorly provide Procurement services and
                we strategically source MRO spares and project requirements
                through our well established network across the globe and
                deliver the products to the customer as per their required
                Delivery terms. In a broader spectrum we deal will range of
                product sourcing in Instrumentation, electrical, mechanical and
                electronics. We also provide various specialized Engineering
                services pertinent to Oil and gas, petrochemical and other types
                of process industries. We also supply manpower and our budding
                business vertical is Controlled Environment Agriculture
              </motion.div>
              
              {/* <div>
              Being a Women Led organization, we strive to gather the women talents and enhance ourselves along with their growth !
              </div> */}
            </div>

            {/* Image */}
            <div className=" mx-28  flex justify-center items-center">
            <img src="rnb.gif" className=" opacity-65 rounded-xl"  alt="image" />
              {/* <img src='https://t3.ftcdn.net/jpg/02/98/16/12/240_F_298161284_WfcxrGOVJNXX0Gnd6t38BDYjMCZVqwzD.jpg'/> */}
              {/* <video autoPlay muted loop>
                <source src="./pis.mp4" width={1000} type="video/webm" />
              </video> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
