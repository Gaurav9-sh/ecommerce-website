import React from 'react'
import './TopCarousel.css'
import iphone from '../images/iphone.png'
import shoes from '../images/shoes.jpg'
import shirt from '../images/shirt.jpg'
import bedsheet from '../images/bedsheet.jpeg'
import lcd from '../images/lcd.png'
const TopCarousel = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={iphone} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={shoes} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={shirt} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={lcd} className="d-block w-100" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default TopCarousel