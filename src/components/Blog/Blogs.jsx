import React from 'react';

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

  return (
    <div className='bg-white'>
 

      {/* Text Header */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
            Minimal Blog
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
        <section className="w-full md:w-2/3 flex flex-col items-center px-3 ">
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="Article" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
              <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
              </p>
              <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
              <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>

          {/* More articles... */}

          {/* Pagination */}
          <div className="flex items-center py-8">
            <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
            <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
            <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
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
