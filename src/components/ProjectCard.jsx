import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { getAllProjects } from '../redux/actions/project'

const ProjectCard = () => {

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
        <section className="text-gray-600 body-font">
            <div className="container px-5 md:py-24 mx-auto">

                <h2 className={`${darkMode && 'text-white'} mt-10  mb-6 text-4xl text-center font-bold`}>Projects</h2>
                <hr className={`${darkMode && 'bg-white'} bg-black w-24 py-0.5 mx-auto mb-16`} />

                <div className="flex flex-wrap -m-4">


                    {
                        loading ? <div className='flex w-full justify-center'><Loader /> </div> :

                            featuredProjects && featuredProjects.map((project) => (
                                <div className="p-4 md:w-1/3" key={project._id}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <div className="rounded-lg w-full h-full">
                                            <a target='blank' href={project?.link} >
                                                <img alt="content" className="w-full h-full object-cover" src={project?.image.url} />
                                            </a>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2>
                                            <h1 className={`${darkMode && 'text-white'} title-font text-lg font-medium text-gray-900 mb-3`}>{project.title}</h1>
                                            <p className={`${darkMode && 'text-white'} leading-relaxed mb-3`}>{project.description}</p>
                                            <div className="flex items-center flex-wrap ">

                                                <button className={`${darkMode && 'bg-gray-600 hover:bg-gray-500'} flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 focus:outline-none hover:bg-gray-800 rounded px-8`}>
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
    )
}

export default ProjectCard