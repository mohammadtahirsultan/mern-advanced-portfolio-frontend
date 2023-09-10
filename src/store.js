import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './redux/reducers/user'
import { adminReducer } from './redux/reducers/admin'
import { projectReducer } from './redux/reducers/project'
import { testimonialReducer } from './redux/reducers/testimonial'
import { themeReducer } from './redux/reducers/theme'

export const server = "http://mern-advanced-portfolio.vercel.app" //ok

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    project: projectReducer,
    testimonial: testimonialReducer,
    theme: themeReducer,
  },
})


