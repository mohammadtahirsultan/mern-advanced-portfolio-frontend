import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/actions/project';
import Loader from '../Loader';
import { getAllBlogs } from '../../redux/actions/blog';
import { Link } from 'react-router-dom';

const Blogs = () => {

  const getCarouselData = () => {


    return {
      currentIndex: 0,
      images: [
        'https://source.unsplash.com/collection/1346951/800x800?sig=1',
        'https://source.unsplash.com/collection/1346951/800x800?sig=2',
        'https://source.unsplash.com/collection/1346951/800x800?sig=3',
        'https://source.unsplash.com/collection/1346951/800x800?sig=4',
        'https://source.unsplash.com/collection/1346951/800x800?sig=5',
        'https://source.unsplash.com/collection/1346951/800x800?sig=6',
        'https://source.unsplash.com/collection/1346951/800x800?sig=7',
        'https://source.unsplash.com/collection/1346951/800x800?sig=8',
        'https://source.unsplash.com/collection/1346951/800x800?sig=9',
        'https://source.unsplash.com/collection/1346951/800x800?sig=9',
        'https://source.unsplash.com/collection/1346951/800x800?sig=9',
        'https://source.unsplash.com/collection/1346951/800x800?sig=9',
      ],
      increment() {
        this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex + 1;
      },
      decrement() {
        this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex - 1;
      },
    };
  };

  let { currentIndex, images, increment } = getCarouselData();

  const dispatch = useDispatch()
  const { blogs, error, loading } = useSelector(state => state.blog)
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: "clearError" })
    }

    dispatch(getAllBlogs())
  }, [error])

  return (
    <div >


      {/* Text Header */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <h2 className={`${darkMode && 'text-white'} font-bold text-gray-800 uppercase text-5xl`}>
            Sigma Developers Blogs
          </h2>
          <p className={`${darkMode && 'text-white'} text-lg`}>
            Lorem Ipsum Dolor Sit Amet
          </p>
        </div>
      </header>

      {/* Topic Nav */}
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

      <div className="container mx-auto flex flex-wrap py-6 ">

        {/* Posts Section */}


        <section className="body-font">
          <div className="container px-5 md:py-24 mx-auto">

            <div className="flex flex-wrap -m-4">

              {
                loading ? <div className='w-screen '><Loader /> </div> :

                  blogs && blogs?.map((blog) => (
                    <div className="p-4 md:w-1/3" key={blog?._id}>
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="rounded-lg w-full h-1/2">
                          <Link to={`/blog/${blog?._id}`} >
                            <img alt="content" className="w-full h-full object-cover" src={blog?.image?.url} />
                          </Link>

                        </div>
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium mb-1">{blog?.category?.category}</h2>
                          <h1 className={` title-font text-lg font-medium mb-3`}>{blog.title}</h1>
                          <p className={`$ leading-relaxed mb-3`}>{blog?.shortDescription}</p>
                          <div className="flex items-center flex-wrap ">

                            <button className={`${darkMode && 'bg-gray-600 hover:bg-gray-800'} mt-6 text-white bg-gray-900 border-0 py-2 focus:outline-none hover:bg-gray-800 rounded px-8`}>
                              <Link to={`/blog/${blog?._id}`}>Read More</Link>

                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  ))
              }





            </div>
          </div>
        </section>


      </div >

      {/* Footer */}
      <footer footer className="w-full border-t pb-12" >
        <div className="relative w-full flex items-center invisible md:visible md:pb-12">
          <button
            className="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
          // onClick={decrement}
          >
            &#8592;
          </button>
          {images.slice(currentIndex, currentIndex + 6).map((image, index) => (
            <img key={index} className="w-1/6 hover:opacity-75" src={image} alt={`Carousel Image ${index}`} />
          ))}
          <button
            className="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
            onClick={increment}
          >
            &#8594;
          </button>
        </div>


      </footer >
    </div >
  );
};

export default Blogs;
