import React from 'react'
import HomePage from './components/HomePage'
import './App.css'
import Footer from './components/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/product'
import About from './components/About'
import Smallcomps from './smallcomps/Smallcomps'
import Checkout from './components/Checkout'
import Contact from './components/Contact'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>
    }
  ])
  return (
    <div>
      <HomePage/>
    </div>
  )
}

export default App