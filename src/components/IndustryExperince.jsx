import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import { useSelector } from 'react-redux';


const IndustryExperince = () => {

  const clientCount = useRef(null);
  const projectCount = useRef(null)
  const YearCount = useRef(null)

  const animateClientCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => clientCount.current.textContent = v.toFixed()
    })
  }


  const animateProjectCount = () => {
    animate(0, 800, {
      duration: 1,
      onUpdate: (v) => projectCount.current.textContent = v.toFixed()
    })
  }


  const animateYearCount = () => {
    animate(0, 5, {
      duration: 2,
      onUpdate: (v) => YearCount.current.textContent = v.toFixed()
    })
  }

  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">


        <h2 className={`${darkMode && 'text-white'} mt-10  mb-6 text-4xl text-center font-bold`}>Work Experience</h2>
        <hr className={`${darkMode && 'bg-white'} bg-black w-24 py-0.5 mx-auto mb-16`} />



        <div className="flex flex-wrap md:-m-4 max-w-[100vw]">


          <IndustryCard functionName={animateClientCount} reference={clientCount} heading={"Clients Worldwide"} />


          <IndustryCard functionName={animateProjectCount} reference={projectCount} heading={"Project Made"} />


          <IndustryCard functionName={animateYearCount} reference={YearCount} heading={"Years Industry Experience"} />


        </div>
      </div>
    </section>
  )
}

export default IndustryExperince




const IndustryCard = ({ functionName, reference, heading }) => {
  return (
    <div className="p-4 md:w-1/3 h-full w-full " >
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center justify-center mb-3">
          <motion.span className='text-2xl font-semibold text-gray-800' whileInView={functionName} ref={reference}>
          </motion.span>
          <span className=' text-gray-800 text-2xl font-semibold pb-0.5'>+</span>


        </div>

        <div className="flex-grow">
          <h2 className='text-center font-semibold text-2xl'>{heading}</h2>
        </div>
      </div>
    </div >

  )
}