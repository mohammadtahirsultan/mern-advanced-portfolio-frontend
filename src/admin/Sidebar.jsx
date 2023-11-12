import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/user';
import { toast } from 'react-hot-toast';

const Sidebar = () => {


    const dispatch = useDispatch()


    // const { error, message } = useSelector(state => state.user)

    const navigate = useNavigate()

    const refreshPage = () => {
        navigate(0);
      }
    const logoutHandle = async () => {
        await dispatch(logoutUser())
        navigate("/")
        refreshPage()

    }

    // useEffect(() => {
    //     if (error) {
    //         toast.error(error)
    //         dispatch({ type: "clearError" })
    //     }
    //     if (message) {
    //         toast.success(message)
    //         dispatch({ type: "clearMessage" })
    //     }


    // }, [error, message])


    return (


        <>
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg> */}

                                    <img src="/home.png" alt="home" className='h-6 w-6' />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard/projects"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg> */}
                                    <img src="/project.jpg" alt="project" className='h-6 w-6' />


                                    <span>Projects</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard/users"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >


                                    <img src="/users.png" alt="users" className='h-6 w-6' />

                                    <span>Users</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard/testimonials"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >

                                    <img src="/testimonials.png" alt="testimonials" className='h-6 w-6' />


                                    <span>Testimonials</span>
                                </Link>
                            </li>


                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >


                                    <img src="/web.png" alt="back-to-website" className='h-6 w-6' />

                                    <span>Back to Website</span>
                                </Link>
                            </li>

                            <li className="rounded-sm">
                                <Link
                                    onClick={logoutHandle}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <img src="/logout.png" alt="logout" className='h-6 w-6' />

                                    <span>Logout</span>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </>




    );
}

export default Sidebar