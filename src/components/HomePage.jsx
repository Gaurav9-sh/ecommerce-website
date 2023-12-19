import React from 'react'
import Navbar from './Navbar'
import TopCarousel from './TopCarousel'
import Sidebar from './Sidebar'
import SalesSection from './SalesSection'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <TopCarousel/>
        <Sidebar/>
        <SalesSection/>
    </div>
  )
}

export default HomePage