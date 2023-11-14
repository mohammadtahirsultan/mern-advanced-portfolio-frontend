import React, { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer.jsx'
import Home from './components/Home/Home'
import { BrowserRouter as MyRouter, Routes, Route, useLocation } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import LoginForm from './components/layout/LoginForm'
import SignUpForm from './components/layout/SignUpForm'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './admin/Dashboard'
import AdminProjects from './admin/AdminProjects'
import Users from './admin/Users'
import Profile from './components/User/Profile'
import EditProfile from './components/User/EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/actions/user'
import { ProtectedRoute } from 'protected-route-react'
import PageNotFound from './components/PageNotFound'
import UpdateRole from './admin/UpdateRole'
import AddProject from './admin/AddProject'
import EditProject from './admin/EditProject'
import Testimonials from './admin/Testimonials'
import Blogs from './components/Blog/Blogs.jsx'
import Blog from './components/Blog/Post.jsx'
import ThemeProvider from './components/themeProvider'



const App = () => {

  return (
    <>

      <ThemeProvider>

        <MyRouter>

          <HeaderWithRoutes />

        </MyRouter>
      </ThemeProvider>
    </>
  )
}

export default App


const HeaderWithRoutes = () => {


  const dispatch = useDispatch()

  const { darkMode } = useSelector((state) => state.theme);


  const { isAuthenticated, user,message } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(loadUser())
  }, [])
  const location = useLocation();
  const showHeader = !location.pathname.startsWith('/dashboard');

  return (


      <div className={` ${darkMode ? `dark:bg-gray-800 dark:text-white` : `bg-white`}`}>


        {showHeader && <Header />}

        <Routes>


          {/* Any Body Can Access These Routes  */}

          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<SignUpForm />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/password/reset/:token' element={<ResetPassword />} />

          {/* Logged In User Routes  */}

          <Route path='/profile' element={<Profile />} />
          {
            user && isAuthenticated &&
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>


              <Route path='/editprofile' element={<EditProfile />} />

            </Route>

          }


          {/* Admin Routes  */}

          {
            user && isAuthenticated && user.role === "admin" &&
            < Route element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === "admin"} adminRoute={true} />}>



              <Route path='/dashboard/testimonials' element={<Testimonials />} />
              <Route path='/dashboard/users' element={<Users />} />
              <Route path='/dashboard/projects' element={<AdminProjects />} />
              <Route path='/dashboard' element={<Dashboard />} />

              <Route path='/dashboard/addprojects' element={<AddProject />} />

              <Route path='/dashboard/project/:id' element={<EditProject />} />

              <Route path='/dashboard/user/:id' element={<UpdateRole />} />

            </Route>

          }

          {/* <Route path='*' element={<PageNotFound />} /> */}

        </Routes >
        <Footer />
      </div>



  );
};