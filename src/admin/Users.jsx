import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserProfile, getAllUsers } from '../redux/actions/admin'
import { toast } from 'react-hot-toast'
import Loader from '../components/Loader'

const Users = () => {

    const dispatch = useDispatch()
    const { loading, error, users, message } = useSelector(state => state.admin)


    const deleteUser = (userId) => {
        dispatch(deleteUserProfile(userId))
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message)
            dispatch({ type: "clearMessage" })
        }

        dispatch(getAllUsers())
    }, [error, message])
    return (
        <div className='flex'>
            <Sidebar />

            <section className="text-gray-600 body-font container">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Ghareebstar Users</h1>

                    </div>
                    <div className=" w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Joined At</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100 rounded-tl rounded-bl">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Email</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Role</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Edit</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Delete</th>


                                </tr>
                            </thead>


                            <tbody>

                                {
                                    loading ? <div className='flex h-[50vh] w-full justify-center items-center ml-40'><Loader /></div> : <>

                                        {
                                            users && users.map((user) => (
                                                <tr key={user._id}>
                                                    <td className="px-4 py-3">{user.joinedAt.slice(0, 10)}</td>
                                                    <td className="px-4 py-3">{user.name}</td>
                                                    <td className="px-4 py-3">{user.email}</td>
                                                    <td className="px-4 py-3 text-lg text-gray-900">{user.role}</td>
                                                    <td className="px-4 py-3 text-lg text-gray-900">
                                                        <button className='bg-black hover:bg-gray-700 text-white w-full py-0.5 rounded-md px-3'>
                                                            <Link to={`/dashboard/user/${user._id}`}>Edit</Link>
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-3 text-lg text-gray-900">
                                                        <button className='bg-red-500 hover:bg-red-600 text-white w-full py-0.5 rounded-md' onClick={() => deleteUser(user._id)}>Delete</button>
                                                    </td>


                                                </tr>
                                            ))
                                        }
                                    </>
                                }




                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Users