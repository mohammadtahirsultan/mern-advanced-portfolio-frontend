import React from 'react'
import Typewriter from 'typewriter-effect';

const About = () => {

    return (
        <div className="container my-0 mx-auto md:px-6">
            <section className="mb-12">
                <div
                    className="relative h-[170px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
                </div>
                <div className="container px-6 md:px-12">
                    <div
                        className="block rounded-lg px-6 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04) md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                        <h2 className='text-3xl md:text-[2.9rem] text-center font-bold '>


                            <Typewriter
                                options={{
                                    strings: "About Me",
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </h2>
                        <hr className='bg-black w-36 py-0.5 my-2 mx-auto mb-16' />

                        <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-2">


                            {/* First Column  */}
                            <div className='flex justify-center items-center flex-col gap-4'>
                                <img className='h-36 w-auto' src="/logo.webp" alt="Sigma Developers" height={70} width={70} />
                                <h2 className='text-2xl font-semibold'>Sigma Developers</h2>
                                <p className='px-8 text-center'> <span className='font-semibold'>At Sigma Developers</span>, we transform your digital dreams into reality. Specializing in vibrant E-Commerce, Business, Portfolio, and Real Estate websites, we ensure your online presence is powerful, effective, and memorable.</p>
                            </div>


                            {/* Second Column  */}
                            <div className='flex justify-center items-center gap-8 flex-col md:border-l-2 border-gray-200' >

                                <h2 className='mt-4 md:mt-0 text-2xl md:text-3xl font-semibold text-center'>Our Brands</h2>

                                <div className="flex ">
                                    <a className="text-gray-500" href='https://www.youtube.com'>
                                        <img src='/yt.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />
                                    </a>
                                    <a className="ml-3 text-gray-500" href='https://www.facebook.com'>
                                        <img src='/fb.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                                    </a>
                                    <a className="ml-3 text-gray-500" href='https://www.github.com'>
                                        <img src='/gh.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                                    </a>

                                    <a className="ml-3 text-gray-500" href='https://www.linkedin.com'>
                                        <img src='/li.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                                    </a>

                                    <a className="ml-3 text-gray-500" href='https://www.instagram.com'>
                                        <img src='/ig.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                                    </a>


                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About