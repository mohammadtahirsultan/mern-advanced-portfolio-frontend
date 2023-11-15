import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/actions/project';
import Loader from '../Loader';

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
  const { loading, error, featuredProjects } = useSelector(state => state.project)
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: "clearError" })
    }

    dispatch(getAllProjects())
  }, [error])

  return (
    <div className='bg-white'>


      {/* Text Header */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
            Ghareebstar Blogs
          </a>
          <p className="text-lg text-gray-600">
            Lorem Ipsum Dolor Sit Amet
          </p>
        </div>
      </header>

      {/* Topic Nav */}
      <nav className="w-full py-4 border-t border-b bg-gray-100" >
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
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto flex flex-wrap py-6 ">
        {/* Posts Section */}


        <section className="text-gray-600 body-font">
          <div className="container px-5 md:py-24 mx-auto">


            <div className="flex flex-wrap -m-4">

              {
                loading ? <div className='flex w-full justify-center'><Loader /> </div> :

                  featuredProjects && featuredProjects.map((project) => (
                    <div className="p-4 md:w-1/3" key={project._id}>
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="rounded-lg w-full h-1/2">
                          <a target='blank' href={project?.link} >
                            <img alt="content" className="w-full h-full object-cover" src={project?.image.url} />
                          </a>
                        </div>
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2>
                          <h1 className={`${darkMode && 'text-white'} title-font text-lg font-medium text-gray-900 mb-3`}>{project.title}</h1>
                          <p className={`${darkMode && 'text-white'} leading-relaxed mb-3`}>{project.description}</p>
                          <div className="flex items-center flex-wrap ">

                            <button className={`${darkMode && 'bg-gray-600 hover:bg-gray-800'} flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 focus:outline-none hover:bg-gray-800 rounded px-8`}>
                              <a target='blank' href={project.link}>See the Demo </a>

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





        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
              Get to know us
            </a>
          </div>

          {/* Instagram Section */}
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" alt="Instagram Post" />
              <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" alt="Instagram Post" />
              {/* More Instagram images... */}
            </div>
            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
              <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="w-full border-t bg-white pb-12">
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
        <div className="w-full container mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
            <a href="#" className="uppercase px-3">About Us</a>
            <a href="#" className="uppercase px-3">Privacy Policy</a>
            <a href="#" className="uppercase px-3">Terms & Conditions</a>
            <a href="#" className="uppercase px-3">Contact Us</a>
          </div>
          <div className="uppercase pb-6">&copy; myblog.com</div>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
