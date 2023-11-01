import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Loader from '../components/Loader'
import { approveTestimonial, deleteUserTestimonial, getAllTestimonials } from '../redux/actions/testimonial'

const Testimonials = () => {

    const dispatch = useDispatch()
    const { loading, error, testimonials, message } = useSelector(state => state.testimonial)



    const approveReviewHandle = (testimonialId) => {
        console.log(testimonialId);
        dispatch(approveTestimonial(testimonialId))
    }

    const deleteTestimonial = (testimonialId) => {
        dispatch(deleteUserTestimonial(testimonialId))
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

        dispatch(getAllTestimonials())
    }, [error, message])

    console.log(testimonials);
    return (
        <div className='flex'>
            <Sidebar />

            <section className="text-gray-600 body-font container">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Ghareebstar Testimonials</h1>

                    </div>
                    <div className=" w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>

                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100 rounded-tl rounded-bl">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100 rounded-tl rounded-bl">Email</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Description</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Approve</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm md:text-lg bg-gray-100">Delete</th>


                                </tr>
                            </thead>


                            <tbody>

                                {
                                    loading ? <div className='flex h-[50vh] w-full justify-center items-center ml-40'><Loader /></div> : <>

                                        {
                                            testimonials && testimonials.map((testimonial) => (
                                                <tr key={testimonial._id}>

                                                    <td className="px-4 py-3">{testimonial?.user?.name}</td>
                                                    <td className="px-4 py-3">{testimonial?.user?.email}</td>
                                                    <td className="px-4 py-3 text-lg text-gray-900">{testimonial.description}</td>

                                                    <td className="px-4 py-3 text-lg text-gray-900">
                                                        <button className='bg-black hover:bg-gray-700 text-white w-full py-0.5 rounded-md '>
                                                            <Link onClick={() => approveReviewHandle(testimonial._id)}>Approve</Link>
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-3 text-lg text-gray-900">
                                                        <button className='bg-red-500 hover:bg-red-600 text-white w-full py-0.5 rounded-md px-2' onClick={() => deleteTestimonial(testimonial._id)}>Delete</button>
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

export default Testimonials