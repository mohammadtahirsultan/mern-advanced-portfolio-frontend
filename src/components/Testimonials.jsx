import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AddReview from './AddReviewModal';
import { getAllTestimonials } from '../redux/actions/testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Loader from './Loader';

const Testimonials = () => {

    const dispatch = useDispatch()
    const { loading, error, approvedTestimonials, message } = useSelector(state => state.testimonial)
    const { isAuthenticated } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getAllTestimonials())
    }, [error, message])

    const [isOpen, setIsOpen] = useState(false)

    const handleReview = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className="body-font max-w-[100vw] ">
            <div className="container md:px-5 md:py-16 mx-auto md:max-w-full max-w-[100vw]">

                <h2 className={`mt-10  mb-6 text-4xl text-center font-bold max-w-[100vw]`}>Testimonials</h2>
                <hr className={`w-24 py-0.5 mx-auto mb-16 max-w-[100vw]`} />


                {
                    loading ? <div className='flex max-w-full justify-center min-h-[65vh]'><Loader /> </div> :
                        <div className="flex flex-wrap mx-auto justify-center max-w-[100vw] ">

                            <section
                                className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left max-w-[100vw] "

                            >

                                {
                                    isAuthenticated ? <button className='dark:bg-white text-black px-6 rounded-sm py-2 mb-4  ml-8 ' onClick={handleReview}>Add Review</button> : <button className='bg-white text-black px-6 rounded-sm py-2 mb-4 md:mb-2 ml-8'>
                                        <Link to="/login">Login to Submit Review</Link>
                                    </button>
                                }

                                {
                                    isOpen && <AddReview onClose={() => setIsOpen(!isOpen)} />
                                }


                                <div className="flex justify-center w-full max-w-[100vw]">
                                    <div className="md:max-w-5xl">

                                        <div
                                            className={`md:m-8 block rounded-lg p-6 pt-20 shadow-lg dark:shadow-black/20 max-w-[100vw] `}>


                                            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={true}>

                                                {/* Testimonials */}
                                                {
                                                    approvedTestimonials && approvedTestimonials.map((testimonial) =>
                                                    (
                                                        <div className="md:flex md:flex-row flex-col" key={testimonial._id}>

                                                            <div
                                                                className="md:w-1/3  mx-auto md:mx-0 md:mb-0 mb-4">
                                                                <img
                                                                    src={testimonial?.user?.image?.url}
                                                                    className="rounded-full shadow-md dark:shadow-black/30 mt-4 md:ml-8 object-cover w-28 h-96 md:w-80 md:h-80"
                                                                    alt={testimonial?.user?.name} />
                                                            </div>



                                                            <div className="md:ml-4 md:mt-0  md:pt-16 text-center md:text-center md:w-2/3">
                                                                <p
                                                                    className="mb-4 font-light">
                                                                    {testimonial.description}
                                                                </p>
                                                                <p
                                                                    className="mb-1 text-xl font-semibold">
                                                                    {testimonial.user.name}
                                                                </p>
                                                                <p
                                                                    className="mb-0 font-semibold">
                                                                    {testimonial.user.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )

                                                    )
                                                }


                                            </Carousel>



                                        </div>
                                    </div>
                                </div>



                            </section>



                        </div>
                }
            </div>
        </section >
    )
}

export default Testimonials