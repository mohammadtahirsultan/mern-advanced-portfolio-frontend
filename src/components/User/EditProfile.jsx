import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../redux/actions/user'
import Loader from '../Loader'
import { useNavigate } from 'react-router-dom'


const EditProfile = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("/logo.webp")


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { loading, message, error } = useSelector(state => state.user)



    const imageUploadChange = (e) => {

        if (e.target.name === "image") {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }
    const registerFormSubmit = async (e) => {
        e.preventDefault()


        const data = new FormData();
        data.set("name", name)
        data.set("email", email)
        data.set("password", password)
        data.set("image", image)


        await dispatch(updateProfile(data));

        navigate("/profile")

    }

    return (


        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-12 w-auto rounded-full" src="/logo.webp" alt="Ghareeb Star Programmer" />
                <h2 className="mt-4 text-center text-2xl font-bold leading-4 tracking-tight text-gray-900">Edit Profile</h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={registerFormSubmit} className="space-y-1" encType="multipart/form-data">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                        <div className="mt-1">
                            <input value={name} type="text" name='name' onChange={(e) => setName(e.target.value)} autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-1">
                            <input value={email} name='email' onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" autoComplete="password" >Password</label>

                        </div>
                        <div className="mt-1">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password' autoComplete="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-text-gray-800sm:text-sm sm:leading-6 px-2" />
                        </div>
                    </div>






                    <div className='pb-2'>
                        <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                        <div className="mt-1 pb-1">

                            <input
                                name="image"
                                accept="image/*"

                                onChange={imageUploadChange}
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 shadow-lg p-4"
                                type="file"

                            />

                        </div>
                    </div>

                    <div>
                        {
                            loading ? <Loader /> : <button type="submit" className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offappend-2 focus-visible:outline-gray-900 mt-4">Update</button>
                        }
                    </div>
                </form>

            </div>
        </div>

    )
}

export default EditProfile



