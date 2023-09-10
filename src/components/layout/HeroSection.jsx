import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


const HeroSection = () => {
    const { darkMode } = useSelector((state) => state.theme);

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className={`${darkMode && `text-white`} title-font sm:text-4xl md:text-3xl mb-4 font-medium text-xl text-gray-900 flex gap-2`}
                    >Welcome to

                        <Typewriter
                            options={{
                                strings: " Ghareeb Star Portfolio ",
                                autoStart: true,
                                loop: true,
                            }}
                        />


                    </h1>
                    <p className={`${darkMode ? 'text-white mb-8 leading-relaxed' : ' mb-8 leading-relaxed'}`}
                    >Ghareeb Star Blog, Your Source for Programming Insights and Web Development Wonders!❤😎
                        Explore the fusion of programming brilliance and web development artistry at Ghareeb Star Blog. Join me in unraveling the complexities of coding, discovering valuable tips, and diving into the realm of crafting captivating websites. Delve into my web development projects, where innovation knows no bounds. Let's embark on this digital adventure together.</p>
                    <div className="flex justify-center">
                        <Link to={"/projects"} className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">Portfolio</Link>
                        <a href="https://wa.me/923266640988" target='blank' className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Hire Me</a>
                    </div>
                </div>


                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:inline-block">
                    <img className="object-cover object-center rounded" alt="hero" src="/blog.webp" />
                </div>
            </div>

        </section>
    )
}

export default HeroSection