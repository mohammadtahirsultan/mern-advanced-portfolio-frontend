import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/user'
import Loader from '../Loader'

const SignUpForm = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    const isNameValid = (name) => {
        // Check if the name is between 3 and 15 characters
        if (name.length < 3 || name.length > 15) {
            return false;
        }

        // Check if the name contains only alphabetic characters and spaces
        return /^[a-zA-Z\s]+$/.test(name);
    };

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { loading, message, error, isAuthenticated } = useSelector(state => state.user)

    const isImageValid = (file) => {
        // Check if the file is not null
        if (!file) {
            toast.error('Please Select an Image.');
            return false;
        }

        // Check if the file type is an image
        if (!file.type.startsWith('image/')) {
            toast.error('Please Select a Valid Image file.');
            return false;
        }

        // Check if the file size is within limits (adjust as needed)
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSizeInBytes) {
            toast.error('Image size exceeds the maximum allowed (5MB).');
            return false;
        }

        return true;
    };

    const imageUploadChange = (e) => {
        if (e.target.name === "image") {
            const selectedImage = e.target.files[0];

            if (isImageValid(selectedImage)) {
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.readyState === 2) {
                        setImage(reader.result);
                    }
                };

                reader.readAsDataURL(selectedImage);
            }
        }
    };
    const registerFormSubmit = async (e) => {
        e.preventDefault()

        if (!isNameValid(name)) {
            toast.error('Name Must Be 3-15 Characters Long');
            return;
        }

        if (!isEmailValid(email)) {
            toast.error('Invalid Email Format');
            return;
        }

        if (!isPasswordValid(password)) {
            toast.error('Invalid Password \nMinimum 8 Characters with Uppercase,Lowercase,Numbers Only');
            return;
        }



        const data = new FormData();
        data.set("name", name)
        data.set("email", email)
        data.set("password", password)
        data.set("image", image)


        await dispatch(registerUser(data));

        setName("")
        setEmail("")
        setPassword("")
        setImage("")

    }

    const { darkMode } = useSelector((state) => state.theme);


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
    }, [message, error, dispatch, isAuthenticated])
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-12 w-auto rounded-full" src="/logo.webp" alt="Ghareeb Star Programmer" />
                <h2 className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ${darkMode && "text-white"}`}>Sign Up </h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={registerFormSubmit} className="space-y-1" encType="multipart/form-data">
                    <div>
                        <label htmlFor="name" className={`block text-sm font-medium leading-6 text-gray-900 ${darkMode && "text-white"}`}>Full Name</label>
                        <div className="mt-1">
                            <input value={name} type="text" name='name' onChange={(e) => setName(e.target.value)} autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-900 ${darkMode && "text-white"}`}>Email address</label>
                        <div className="mt-1">
                            <input value={email} name='email' onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col  ">
                            <label htmlFor="password" className={`mt-2 block text-sm font-medium leading-6 text-gray-900 ${darkMode && "text-white"}`} >Password <span className='text-xs text-red-600 font-extralight'>Special Characters Not Allowed</span> </label>
                            <label htmlFor="password" className={`inline text-xs mt-1 mb-2 leading-6 text-red-600 ${darkMode && "text-white"}`} >At least 8 Chracters with 1-Digit, 1-Lowercase & 1-Uppercase Letter</label>

                        </div>
                        <div className="mt-1">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password' autoComplete="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-text-gray-800sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>






                    <div className='pb-2'>
                        <label htmlFor="image" className={`block text-sm font-medium leading-6 text-gray-900 ${darkMode && "text-white"}`}>Image</label>
                        <div className="mt-1 pb-1">

                            <input
                                name="image"
                                accept="image/*"
                                required
                                onChange={imageUploadChange}
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-20 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 shadow-lg p-4"
                                type="file"

                            />

                        </div>
                    </div>

                    <div>
                        {
                            loading ? <Loader /> : <button type="submit" className={`flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 dark:text-black text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offappend-2 focus-visible:outline-gray-900 mt-4 ${darkMode && "text-black bg-white hover:bg-gray-100"}`}>Sign Up</button>
                        }
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already Have an Account?
                    <Link to={"/login"} className={`font-semibold leading-6 text-gray-900 hover:text-gray-500 ml-1 ${darkMode && "text-white "}`}>Login Here</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm