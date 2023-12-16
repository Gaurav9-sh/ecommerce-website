import React from 'react'
import Navbar from './Navbar'
import TopCarousel from './TopCarousel'
import Sidebar from './Sidebar'
import SalesSection from './SalesSection'
import Category from './Category'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <TopCarousel/>
        <Sidebar/>
        <SalesSection/>
        <Category/>
    </div>
  )
}

export default HomePage