import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeleteProfile from './DeleteProfileModal'
import {  useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'


const Profile = () => {

    const {  error, user, message, isAuthenticated } = useSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
        if (message) {
            toast.success(message)
        }

        if (!isAuthenticated) {
            navigate("/login")
        }

    }, [error, message, isAuthenticated])

    const [isOpen, setIsOpen] = useState(false)

    const handleDelete = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div
            className="max-w-2xl mx-4 sm:max-w-sm md:max-w-2xl lg:max-w-2xl xl:max-w-4xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto h-[65vh]  mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={user?.image?.url} alt='Woman looking front' />
            </div>
            <div className="text-center mt-4">
                <h2 className="font-semibold mt-2">{user?.name}</h2>
                <p className="text-gray-500">{user?.joinedAt.slice(0, 10)}</p>
            </div>


            <div className='flex mt-4 justify-center items-center'>
                <span className='font-semibold'>{user?.email} </span>

            </div>

            <div className=" flex p-4 border-t mx-8 mt-16 gap-3">
                <button className="md:w-1/4 w-1/2  block mx-auto rounded-lg md:rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-0 py-2">
                    <Link to={"/editprofile"}>Edit Profile</Link>
                </button>

                <button className="md:w-1/4 w-1/2 block mx-auto rounded-lg md:rounded-full bg-red-500 hover:bg-red-600 hover:shadow-lg font-semibold text-white px-0 md:py-2" onClick={handleDelete}>
                    Delete Profile
                </button>
                {
                    isOpen && <DeleteProfile onClose={() => setIsOpen(false)} />
                }

            </div>


        </div>
    )
}

export default Profile



