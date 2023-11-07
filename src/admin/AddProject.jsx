import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Sidebar from './Sidebar'
import { addProject } from '../redux/actions/project'

const AddProject = () => {


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState("/logo.webp")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { loading, message, error } = useSelector(state => state.project)


    const imageUploadChange = (e) => {

        if (e.target.name === "image") {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }
    const addProjectSubmit = async (e) => {
        e.preventDefault()


        const data = new FormData();
        data.set("title", title)
        data.set("description", description)
        data.set("category", category)
        data.set("link", link)
        data.set("image", image)


        await dispatch(addProject(data));

        setTitle("")
        setDescription("")
        setCategory("")
        setLink("")
        setImage("")

        navigate("/dashboard/projects")
    }



    return (

        <div className='flex'>
            <Sidebar />

            <div className="flex min-h-full container flex-col justify-center px-6 py-8 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-4 tracking-tight text-gray-900">Add Project </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={addProjectSubmit} className="space-y-1" encType="multipart/form-data">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                            <div className="mt-1">
                                <input value={title} type="text" name='title' onChange={(e) => setTitle(e.target.value)} autoComplete="title" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                            <div className="mt-1">
                                <input value={description} name='description' onChange={(e) => setDescription(e.target.value)} type="text" autoComplete="description" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            <div className="mt-1">
                                <input value={category} name='category' onChange={(e) => setCategory(e.target.value)} type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-grey-600 sm:text-sm sm:leading-6 px-2" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900" autoComplete="link" >Link</label>

                            </div>
                            <div className="mt-1">
                                <input value={link} onChange={(e) => setLink(e.target.value)} type="text" name='link' autoComplete="link" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inappend ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inappend focus:ring-text-gray-800sm:text-sm sm:leading-6 px-2" />
                            </div>
                        </div>






                        <div className='pb-2'>
                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                            <div className="mt-1 pb-1">

                                <input
                                    name="image"
                                    accept="image/*"
                                    required
                                    onChange={imageUploadChange}
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 shadow-lg p-4"
                                    type="file"

                                />

                            </div>
                        </div>

                        <div>
                            {
                                loading ? <Loader /> : <button type="submit" className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offappend-2 focus-visible:outline-gray-900 mt-4">Create</button>
                            }
                        </div>
                    </form>


                </div>
            </div>
        </div>

    )
}

export default AddProject