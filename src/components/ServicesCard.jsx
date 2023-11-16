import React from 'react'
import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';


const ServicesCard = () => {

    const { darkMode } = useSelector((state) => state.theme);

    return (
        <section className="body-font">
            <div className="container px-5 py-16 mx-auto max-w-[100vw]">


                <h2 className={`mt-10  mb-6 text-4xl text-center font-bold`}>Services</h2>
                <hr className={`bg-black w-24 py-0.5 mx-auto mb-16`} />



                <div className="flex flex-wrap ">

                    <ServiceCard image={"/programming.png"} heading={"Web Development"} />
                    <ServiceCard image={"/pencil.png"} heading={"Content Writing"} />
                    <ServiceCard image={"/web.png"} heading={"Digital Marketing"} />
                    <ServiceCard image={"/cyber.png"} heading={"Cyber Security"} />
                    <ServiceCard image={"/blockchain.png"} heading={"Blockchain Development"} />
                    <ServiceCard image={"/SEO.png"} heading={"SEO"} />

                </div>
            </div>
        </section>
    )
}

export default ServicesCard



const ServiceCard = ({ image, heading }) => {


    return (
        <div className="p-4 md:w-1/3 w-full">
            <div className="flex rounded-lg h-full p-8 flex-col shadow-xl border-2">
                <div className="flex items-center justify-center mb-3">
                    <img src={image} height={50} width={50} alt='Services' className='mx' />
                </div>

                <div className="flex-grow">

                    <h2 className='text-center font-semibold text-2xl'>

                        <Typewriter
                            options={{
                                strings: heading,
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </h2>

                </div>
            </div>
        </div>

    )
}

