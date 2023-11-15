import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/actions/project';
import toast from 'react-hot-toast';

function Blog() {
    // const getCarouselData = () => {
    //     return {
    //         currentIndex: 0,
    //         images: [
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=1',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=2',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=3',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=4',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=5',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=6',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=7',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=8',
    //             'https://source.unsplash.com/collection/1346951/800x800?sig=9',
    //         ],
    //         increment() {
    //             this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex + 1;
    //         },
    //         decrement() {
    //             this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex - 1;
    //         },
    //     };
    // };

    let open = false; // Assuming this is declared somewhere

    const dispatch = useDispatch()
    const { loading, error, featuredProjects } = useSelector(state => state.project)
    const { darkMode } = useSelector((state) => state.theme);

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" })
        }

        //   dispatch(getAllProjects())
    }, [error])

    return (
        <div className="">


            {/* ... Text Header ... */}
            <header className="w-full container mx-auto">
                <div className="flex flex-col items-center py-12">
                    <h2 className={`${darkMode && ''} font-bold text-gray-800 uppercase text-5xl`}>
                        Ghareebstar Blogs
                    </h2>
                    <p className={`${darkMode && ''} text-lg`}>
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
            </header>

            {/* ... Topic Nav ... */}
            <nav className={"w-full py-4 border-t border-b"} >
                <div className="block sm:hidden">
                    <a
                        href="#"
                        className="md:flex text-base font-bold uppercase text-center flex justify-center items-center"
                        onClick={() => open = !open}
                    >
                        Topics <i className={`fas ml-2 ${open ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                    </a>
                </div>
                <div className={`w-full ${open ? 'flex-grow sm:flex sm:items-center sm:w-auto' : 'block'}`}>
                    <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                        <a href="#" className={`${darkMode && 'hover:bg-gray-700'} hover:bg-gray-200 rounded py-2 px-6 mx-2`}>Technology</a>
                        <a href="#" className={`${darkMode && 'hover:bg-gray-700'} hover:bg-gray-200 rounded py-2 px-6 mx-2`}>Automotive</a>
                        <a href="#" className={`${darkMode && 'hover:bg-gray-700'} hover:bg-gray-200 rounded py-2 px-6 mx-2`}>Finance</a>
                        <a href="#" className={`${darkMode && 'hover:bg-gray-700'} hover:bg-gray-200 rounded py-2 px-6 mx-2`}>Politics</a>
                        <a href="#" className={`${darkMode && 'hover:bg-gray-700'} hover:bg-gray-200 rounded py-2 px-6 mx-2`}>Culture</a>
                        <a href="#" className={`${darkMode && 'hover:bg-gray-700'} hover:bg-gray-200 rounded py-2 px-6 mx-2`}>Sports</a>
                    </div>
                </div>
            </nav>

            {/* ... Rest of the content ... */}
            <div className="container mx-auto flex flex-wrap py-6">

                {/* ... Post Section ... */}
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                    {/* ... Article ... */}
                    <article className="flex flex-col shadow my-4">
                        {/* ... Article Image ... */}
                        <a href="#" className="hover:opacity-75">
                            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
                        </a>
                        <div className=" flex flex-col justify-start p-6">
                            <a href="#" className="text-sm font-bold uppercase pb-4">Technology</a>
                            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                            <p href="#" className="text-sm pb-8">
                                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                            </p>
                            <h1 className="text-2xl font-bold pb-3">Introduction</h1>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
                            {/* ... More content ... */}
                        </div>
                    </article>

                    {/* ... Previous/Next Links ... */}
                    <div className="w-full flex pt-6">
                        <a href="#" className="w-1/2 shadow hover:shadow-md text-left p-6">
                            <p className="text-lg font-bold flex items-center"><i className="fas fa-arrow-left pr-1"></i> Previous</p>
                            <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                        </a>
                        <a href="#" className="w-1/2 shadow hover:shadow-md text-right p-6">
                            <p className="text-lg font-bold flex items-center justify-end">Next <i className="fas fa-arrow-right pl-1"></i></p>
                            <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                        </a>
                    </div>

                    {/* ... Author Section ... */}
                    <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow mt-10 mb-10 p-6">
                        <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                            <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" className="rounded-full shadow h-32 w-32" alt="Author" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center md:justify-start">
                            <p className="font-semibold text-2xl">David</p>
                            <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
                            {/* ... Social Icons ... */}
                            <div className="flex items-center justify-center md:justify-start text-2xl no-underline pt-4">
                                <a className="" href="https://facebook.com/ghareebstar">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a className="pl-4" href="https://instagram.com/ghareebstar">
                                    <i className="fab fa-instagram"></i>
                                </a>
                               
                                <a className="pl-4" href="https://linkedin.in/ghareebstar">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ... Sidebar Section ... */}
                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                    {/* ... About Us Section ... */}
                    <div className="w-full shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">About Us</p>
                        <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                        <a href="#" className="w-full  font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-4">
                            Get to know us
                        </a>
                    </div>

                    {/* ... Instagram Section ... */}
                    <div className="w-full  shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">Instagram</p>
                        <div className="grid grid-cols-3 gap-3">
                            {/* ... Instagram Images ... */}
                        </div>
                        <a href="https://instagram.com/ghareebstar" className="w-full font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-6">
                            <i className="fab fa-instagram mr-2"></i> Follow @ghareebstar
                        </a>
                    </div>
                </aside>

            </div>

        </div>
    );
}

export default Blog;
