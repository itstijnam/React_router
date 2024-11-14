import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/Users/User'
import Footer from './Components/Footer/Footer'
import Github from './Components/Github/Github'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Header' element={<Header/>} />
      <Route path='Footer' element={<Footer/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='User/:userid' element={<User/>} />
      <Route path='Github' element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
