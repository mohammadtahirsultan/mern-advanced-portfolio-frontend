import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/actions/user'
import { toast } from 'react-hot-toast'
import Loader from '../Loader'

const LoginForm = () => {



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate()
    const { loading, message, error, isAuthenticated } = useSelector(state => state.user)
    const dispatch = useDispatch()


    const formSubmit = (e) => {
        e.preventDefault()

        dispatch(loginUser(email, password))

        setEmail("")
        setPassword("")
    }



    useEffect(() => {
        if (message) {
            toast.success(message)
            dispatch({ type: "clearMessage" })
        }
        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" })
        }


        if (isAuthenticated) {
            return navigate("/profile")
        }


    }, [message, error, dispatch,isAuthenticated])
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-6 w-auto rounded-full" src="/logo.webp" alt="Ghareeb Star Programmer" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={formSubmit} >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <Link to={"/forgotpassword"} className="font-semibold text-gray-800 hover:text-gray-500">Forgot password?</Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-gray-800sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div>
                        {
                            loading ? <Loader /> : <button type="submit" className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Sign in</button>
                        }
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link to={"/register"} className="font-semibold leading-6 text-gray-900 hover:text-gray-500 ml-1">Register Here</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm