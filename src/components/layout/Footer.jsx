import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
    const { darkMode } = useSelector((state) => state.theme);

    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src='/logo.webp' alt="Mohammad-Tahir" height={50} width={50} className='rounded-full' />
                    <span className={`${darkMode && 'text-white'} ml-3 text-xl`}>Ghareeb Star</span>
                </a>
                <p className={`${darkMode && 'text-white'} text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`}>© {new Date().getFullYear()} Ghareeb Star —
                    <a href="mailto:tahirsultanofficial@gmail.com" className={`${darkMode && 'text-white'}  text-gray-600 ml-1`} rel="noopener noreferrer" target="_blank">@tahirsultanofficial</a>
                </p>


                <span className=" sm:ml-auto sm:mt-0 mt-4 grid grid-cols-5 ">
                    <a className="text-gray-500" href='https://www.youtube.com'>
                        <img src='/yt.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />
                    </a>
                    <a className="ml-3 text-gray-500" href='https://www.facebook.com/selftaughtstunts1'>
                        <img src='/fb.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                    </a>
                    <a className="ml-3 text-gray-500" href='https://www.github.com/ghareebstar'>
                        <img src='/gh.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                    </a>

                    <a className="ml-3 text-gray-500" href='https://www.linkedin.com/in/ghareebstar'>
                        <img src='/li.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                    </a>

                    <a className="ml-3 text-gray-500" href='https://www.instagram.com/ghareebstar'>
                        <img src='/ig.png' alt="Mohammad-Tahir" height={35} width={35} className='hover:cursor-pointer rounded-full' />

                    </a>


                </span>



            </div>
        </footer>
    )
}

export default Footer