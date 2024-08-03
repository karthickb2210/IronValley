import React from "react";
import SingleProduct from "./SingleProduct"; 
function Valves() {
    const p1 = {
        name : "Direct reading level gauges series",
        code:"BT & BR",
        img : "/p1.png",
        l1 :"For use with any fluid",
        l2: "With transparent or reflex glasses. All materials construction, including carbon steel, stainless steel.",
        l3:"Rating: ASME Class 150 to 2500 (from PN 6 to PN 420)",
    }
    const p2 = {
        name: "Bicolour level gauges series BC",
        img : "/p2.png",
        code:"BC",
        l1:"Designed for water/steam measurement.",
        l2:"Materials: stainless steel and carbon steel.",
        l3:"Options: remote transmission by means of mirrors, optic fiber, closed circuit television."
    }
    const p3 = {
        name : "Magnetic Level Gauges series",
        img :"/p3.png",
        code:"MAG",
        l1:"Suitable for any fluid, up to most severe operating condition.",
        l2:"Materials: stainless steel, special alloys, titanium, plastics.",
        l3:"Rating: ASME Class 150 to 2500 (from PN 10 to PN 420)"
    }
    const p4 = {
        name : "Remote level transmitter series",
        img :"/p4.png",
        code:"MST",
        l1:"Can be used alone or connected to MAG series magnetic level gauges.",
        l2:"Long distance question/replies with SMS/GPRS.",
        l3:"Up to 6000 mm useful measuring range. Explosion proof available on request."
    }
    const p5 = {
        name : "Conductive probe level indicator series",
        img :"/p5.png",
        code:"RLG",
        l1:"For water/steam measurement up to saturated steam (225 bar).",
        l2:"Redundant circuits and self-diagnostic equipped for maximum reliability.",
        l3:"Analogic signal (4÷20 mA) and digital signal (HART, Profibus, etc). Configurable free exchange contacts"
    }
    const p6 = {
        name : "Intelligent camera system series",
        img :"/p6.png",
        code:"CLT",
        l1:"For remote monitoring of one or more direct reading level gauges.",
        l2:"Monitors extension, level and volume of water basins and rivers. Controls stability of historical, residential and industrial buildings.",
        l3:"Signal transmission by wire or wireless."
    }
    const b1 = {
        name : "Ball valves series",
        img :"/b1.png",
        code:"WVE",
        l1:"Floating or trunnion type.",
        l2:"Rating: ASME Class 150 to 2500; from PN16 to PN100; API 2000 to 10000.",
        l3:"Size: from 1/4” to 48” inch over on request."
    }
    const b2 = {
        name : "Multilayer seated ball valves series",
        img :"/b2.png",
        code:"HTB & HTL",
        l1:"Bubble-tight (zero leakage) at lowest and highest temperatures.",
        l2:"Materials: carbon steel stainless steel, special alloys, titanium, etc.",
        l3:"Size: from 1/4” up to 48” and over."
    }
    const rv1 = {
        name:"Triple eccentric rotary valves series",
        img:"/r1.png",
        code:"HTT",
        l1:"No rubbing and wearing between seal ring and body seat.",
        l2:"Multilayer sealing suitable from -196 °C up to +550 °C and over.",
        l3:"Size: from 3” up to 48” (and over on request)."
    }
    const pv1 = {
        name:"Piston Valves series",
        img:"/pv1.png",
        code:"BV",
        l1:"Bubble-tight (zero leakage) at lowest and highest temperatures.",
        l2:"Approved for the handling of liquefied gases on railway tanks.",
        l3:"Size: 1/2“ up to 8“ (from DN15 up to DN 200)."
    }
    const pv2 = {
        name : "Forged “Y” pattern valves series",
        img: "/pv2.png",
        code:"WBY",
        l1:"Less fluid turbulence and higher flow coefficient.",
        l2:"Available with electric or pneumatic actuator on request.",
        l3:"Size: 1/4” up to 4”."
    }
    // const pv3 = {
    //     name : "Forged “Y” pattern valves series",
    //     img: "/pv3.png",
    //     code:"BLY",
    //     l1:"Bonnetless - Rising, non rotating stem.",
    //     l2:"Available in special designs and materials for any fluid.",
    //     l3:"Size: 1/2” up to 3” ."
    // }
    const vs1 = {
        name:"Special BONETTI valves series",
        img:"/pv3.png",
        code:"SV",
        l1:"Custom made valves for severe duty applications.",
        l2:"Valve type: stop, throttling, check.",
        l3:"Available in various executions and materials, also special alloys. On request, available with electric or pneumatic actuator."
    }
    const vs2 = {
        name:"Quick acting automatic valves series",
        img:"/vs2.png",
        code:"AV2 & AV3",
        l1:"Designed for H.P. preheaters bypass systems. Hydraulically self-actuated .",
        l2:"Operating speed controlled by an external regulating valve.",
        l3:"Nominal diameters up to 18” size."
    }
    const vs3 = {
        name:"Blowdown & blowoff valves series",
        img:"/vs3.png",
        code:"BLB, PBR & RSS",
        l1:"For continuous (BLB) or discontinuous (PBR) or intermittent blow-off. ",
        l2:"Available with actuator.",
        l3:"PN 40-63-100-160-250-420-630-760."
    }
    const vs4 = {
        name:"High pressure gate valves series",
        img:"/vs4.png",
        code:"CMI-S",
        l1:"Pressure Seal.Split wedge or Parallel slide.",
        l2:"Hand operated or actuated (electrically or pneumatically). Bypass and/or equalizing pipe on request.",
        l3:"Size: 2” up to 28” "
    }
    const vs5 = {
        name:"High pressure globe valves series",
        img:"/vs5.png",
        code:"CMI-G",
        l1:"Pressure Seal",
        l2:"Construction: “T” type, “Y” type, angle, “Elbow down”.",
        l3:"Size: 4” up to 24”."
    }
    const vs6 = {
        name:"High pressure check valves series",
        img:"/vs6.png",
        code:"CMI-C",
        l1:"Vertical seat (perpendicular to flow), higher flow coefficient.Pressure seal or bolted bonnet.",
        l2:"Swing or tilting disk.",
        l3:"Size: 2” to 32” "
    }
  return (
    <div className="mx-24 py-24">
    {/* <span class="text-gray-400 text-xl max-w-lg mx-auto mb-2 capitalize flex items-center">Products We Offer <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-600 ml-3 w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </span>
  <h1 class="text-white text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">High Pressure Valves & Guages</h1> */}
    <h1 className=" text-4xl text-white my-16 text-center">Level Gauges</h1>
      <div className="grid gap-12  sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
       
        
        <SingleProduct prop={p1} />
        <SingleProduct prop={p2} />
        <SingleProduct prop={p3} />
        </div>
        <h1 className=" text-4xl text-white my-16 text-center">Level Indicators</h1>
        <div className="grid gap-12  sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
        
        <SingleProduct prop={p4} />
        <SingleProduct prop={p5} />
        <SingleProduct prop={p6} />
        </div>

        <h1 className=" text-4xl text-white my-16 text-center">Ball Valves</h1>
        <div className="grid gap-12  sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
        
        <SingleProduct prop={b1} />
        <SingleProduct prop={b2} />

        </div>
        <h1 className=" text-4xl text-white my-16 text-center">Rotary Valves</h1>
        
        <div className="grid gap-12  sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
        <div className=" col-start-2">
        <SingleProduct prop={rv1} />
        </div>
        </div>
        <h1 className=" text-4xl text-white my-16 text-center">Piston Valves</h1>
        <div className="grid gap-12  sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
        <SingleProduct prop={pv1} />
        <SingleProduct prop={pv2} />
        {/* <SingleProduct prop={pv3} /> */}
        </div>

        <h1 className=" text-4xl text-white my-16 text-center">Valves Series</h1>
        <div className="grid gap-12  sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
        <SingleProduct prop={vs1} />
        <SingleProduct prop={vs2} />
        <SingleProduct prop={vs3} />
        <SingleProduct prop={vs4} />
        <SingleProduct prop={vs5} />
        <SingleProduct prop={vs6} />
        </div>
        
      </div>
    
  );
}

export default Valves;
