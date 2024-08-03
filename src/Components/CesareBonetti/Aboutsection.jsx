import React from 'react'

function Aboutsection() {
  return (
    <div className=' my-32'>
      <section className="text-white h-[100vh] my-32">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-600">
					<h3 className="text-3xl font-semibold">Cesare Bonatti</h3>
					<span className="text-sm font-bold tracking-wider ">What we posses</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
						<h3 className="text-xl font-semibold tracking-wide">About Us </h3>
                        <ul className=' list-disc space-y-1'>
                           <li>
                           <p className=" mt-3 text-justify "> We offer the largest range (from ¼” NB up to 48″ NB and up to ASME Class 4500) of High Pressure Globe, Gate and Check Valves, Bellows Sealed Valves, High Pressure-High Temperature and/or Cryogenic service Ball Valves, world renewed.</p>
                           </li> 
                           <li className=' text-justify '>
                            <p >Recently improved Piston Valves and the widest pressure, temperature, and application range of Glass, Magnetic, and Resistive Probe Liquid Level Gauges for every possible liquid handling application.</p>
                           </li>
                        </ul>
						
                       
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
						<h3 className="text-xl font-semibold tracking-wide">Mission</h3>
                        <ul className=' list-disc mt-3 text-justify space-y-1'>
                            <li>With passion and continuity, we want to take care of our Customers in any situation, granting quality, safety, and efficiency over the time.</li>
                            <li>Our mission has a target to be close as much as possible to our old and new Customers, always led by their needs, ready to share their technical problems and to work for finding the best solution.</li>
                        </ul>
						
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
						<h3 className="text-xl font-semibold tracking-wide">Our Factory</h3>
                        <ul className=' mt-3 list-disc text-justify space-y-1'>
                            <li>A World Class Valve and Level Gauge Manufacturing facility which has commenced production primarily to complement the very high-pressure range of valves.</li>
                            <li>With a strong manufacturing tradition which remains undiluted since the company was first formed and the strong values and commitment, this plant will churn out some of the world’s best valves and level gauges in the coming decades.</li>
                        </ul>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Aboutsection
