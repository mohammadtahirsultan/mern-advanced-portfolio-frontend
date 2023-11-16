import { BugReport, Code, Create, CurrencyBitcoin, Language, PersonPinCircle, QueryStats } from '@mui/icons-material';
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



                <div className="flex flex-wrap">

                    <ServiceCard image={<Code className='text-3xl' />} heading={"Web Development"} />
                    <ServiceCard image={<Create className='text-3xl' />} heading={"Content Writing"} />
                    <ServiceCard image={<Language className='text-3xl' />} heading={"Digital Marketing"} />
                    <ServiceCard image={<BugReport className='text-3xl' />} heading={"Cyber Security"} />
                    <ServiceCard image={<CurrencyBitcoin className='text-3xl' />} heading={"Blockchain Development"} />
                    <ServiceCard image={<QueryStats className='text-3xl' />} heading={"SEO"} />

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
                    <span> {image} </span>
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

