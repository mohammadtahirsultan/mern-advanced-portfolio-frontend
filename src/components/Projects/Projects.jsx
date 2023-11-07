import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';
import { getAllProjects } from '../../redux/actions/project';
import Loader from '../Loader';
import { Link } from 'react-router-dom'

const Project = () => {

  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container px-5 py-16 mx-auto">

        <h2 className={`${darkMode && 'text-gray-400'} mb-6 text-3xl md:text-5xl text-center font-bold`}>
          <Typewriter
            options={{
              strings: "Projects",
              autoStart: true,
              loop: true,
            }}
          />

        </h2>
        <hr className={`${darkMode && 'bg-gray-400'} bg-black w-24 py-0.5 mx-auto mb-16`} />

        <div className={`${darkMode && 'text-gray-200'} flex flex-wrap -mx-4 -mb-10 text-center`}>


          <ProjectCard />


        </div>




      </div>
    </section>
  )
}

export default Project



const ProjectCard = () => {

  const dispatch = useDispatch()
  const { loading, error, projects } = useSelector(state => state.project)
  const { darkMode } = useSelector((state) => state.theme);



  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: "clearError" })
    }

    dispatch(getAllProjects())
  }, [error])
  return (

    <>
      {
        loading ? <div className='flex w-screen justify-center' ><Loader /> </div> : <>
          {
            projects && projects.map((project) => (
              <div className="sm:w-1/2 mb-10 px-2" key={project._id}>
                <div className="rounded-lg w-full h-2/3">
                  <a target='blank' href={project?.link} >
                    <img alt="content" className="w-full h-full object-cover" src={project?.image.url} />
                  </a>
                </div>
                <h2 className={`${darkMode && 'text-white'} title-font text-2xl font-medium text-gray-900 mt-6 mb-3`}>{project?.title}</h2>
                <p className="leading-relaxed text-base px-8">{project?.description}</p>
                <button className={`${darkMode && 'bg-gray-600 hover:bg-gray-500'} flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 focus:outline-none hover:bg-gray-800 rounded px-8`}>
                  <a href={project?.link}>See the Demo </a>
                </button>
              </div>
            ))
          }


        </>
      }
    </>

  )
}