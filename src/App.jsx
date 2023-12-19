import React from 'react'
import HomePage from './components/HomePage'
import './App.css'
import Footer from './components/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>
    }
  ])
  return (
    <>
      <Navbar/>
       <RouterProvider router = {router}/>
      <Footer/>
    </>
  )
}

export default App