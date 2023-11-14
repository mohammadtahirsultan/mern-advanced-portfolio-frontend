import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/user'
import { toggleTheme } from '../../redux/reducers/theme'

const Header = () => {


  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  const dispatch = useDispatch()

  const { darkMode } = useSelector((state) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const { error, user, message, isAuthenticated } = useSelector(state => state.user)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message)
      dispatch({ type: "clearMessage" })
    }
  

  }, [error, message])


  return (


    <header className={`${darkMode ? 'text-white wave bg-gray-800 ' : 'text-gray-900 bg-white z-10'} body-font shadow-lg sticky top-0 w-full`}  >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link to={"/"} className="flex title-font font-medium items-center mt-3 md:mt-0 text-gray-900 mb-4 md:mb-0">
          <img src="/logo.webp" width={50} height={50} className='absolute md:static left-6  rounded-full' alt="Mohammad Tahir" />
          <span className={`hidden md:inline ${darkMode ? 'text-white ml-3 text-xl' : ' ml-3 text-xl'}`}>Ghareeb Star Programmer</span>
        </Link>
        {/* Mobile Hamburger */}
        <div className="md:hidden absolute right-6 ml-auto">
          <button
            className="text-gray-900 dark:text-white hover:text-gray-400"
            onClick={toggleMobileNav}
          >
            {darkMode ? <img src="/hamburger-white.jpg" alt="white-hamburger" className='h-8 w-8' /> : <img src="/hamburger-black.png" alt="hamburger-black" className='h-8 w-8' />}
          </button>
        </div>


        <nav className={`md:ml-auto md:flex flex-col md:flex-row items-center text-base md:space-x-5 ${showMobileNav ? 'flex flex-col gap-5' : 'hidden'}`}>
          <Link onClick={handleThemeToggle} className={`mr-5 transition ease-in-out delay-[700ms] ${darkMode && 'hover:text-gray-400'}  hover:text-gray-900 hover:font-semibold md:pt-2`}>
            {
              darkMode ? <img className={`${darkMode && 'hover:text-gray-400'} h-8 w-8`} src="/moon.jpg" alt="moon" /> : <img className='h-8 w-8' src="/sun.webp" alt="moon" />
            }
          </Link>
          <Link to={"/"} className={`transition ease-in-out delay-[700ms] mr-5 ${darkMode && 'hover:text-gray-400'} hover:text-gray-900 hover:font-semibold`}>Home</Link>
          <Link to={"/projects"} className={`mr-5 transition ease-in-out delay-[700ms] ${darkMode && 'hover:text-gray-400'}  hover:text-gray-900 hover:font-semibold`}>Projects</Link>
          <Link to={"/about"} className={`mr-5 transition ease-in-out delay-[700ms] ${darkMode && 'hover:text-gray-400'}  hover:text-gray-900 hover:font-semibold`}>About</Link>
          <Link to={"/contact"} className={`mr-5 transition ease-in-out delay-[700ms] ${darkMode && 'hover:text-gray-400'}  hover:text-gray-900 hover:font-semibold`}>Contact</Link>
          <Link to={"/blogs"} className={`mr-5 transition ease-in-out delay-[700ms] ${darkMode && 'hover:text-gray-400'}  hover:text-gray-900 hover:font-semibold`}>Blogs</Link>
          <Link to={"/blog/:id"} className={`mr-5 transition ease-in-out delay-[700ms] ${darkMode && 'hover:text-gray-400'}  hover:text-gray-900 hover:font-semibold`}>Blog</Link>

        </nav>

      </div>
    </header >
  )
}

export default Header