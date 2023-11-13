import React from 'react'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';


const Contact = () => {

    const animation = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            x: '-100%',
            opacity: 0
        },
        two: {
            x: '200%',
            opacity: 0
        },

    }

    return (
        <>
            <div className='h-[26.16rem] w-full flex justify-center flex-col my-16 items-center gap-24'>

                <motion.div
                    className='md:text-2xl text-sm font-semibold mt-16 flex'
                    initial={animation.one}
                    whileInView={animation.whileInView}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Contact :  <a href="mailto:tahirsultanofficial@gmail.com" className='ml-2'>


                        <span> <Typewriter

                            options={{
                                strings: "tahirsultanofficial@gmail.com",
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </a>


                </motion.div>



                <motion.div
                    className='flex md:text-2xl text-sm font-semibold'
                    initial={animation.two}
                    whileInView={animation.whileInView}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >



                    <Typewriter
                        options={{
                            strings: "Contact Us on",
                            autoStart: true,
                            loop: true,
                        }}
                    />


                    :<a className='mb-2 md:mb-0' href="https://api.whatsapp.com/send?phone=+923266640988" > <img className='ml-2 h-8 w-8' src="/wa.png" alt="whatsapp" />  </a> </motion.div>
            </div>

        </>
    )
}

export default Contact