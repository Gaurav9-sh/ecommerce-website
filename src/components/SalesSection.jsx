import React from 'react'
import Card from './Card'
import './saleSection.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
const SalesSection = () => {
  return (
    <div className='saleSection'>
        <div className="writingPart">
          <h4>Today's</h4>
          <h1>Flash Sale</h1>
        </div>
        <div className="cardSection">
            <Card image= {image1} title="HAVIT HV-G92 Gamepad" price="120" price2="160"/>
            <Card image= {image2} title="AK-900 Wired Keyboard" price="960" price2="1160"/>
            <Card image= {image3} title="IPS LCD Gaming Monitor" price="370" price2="400"/>
            <Card image= {image4} title="S-Series Comfort Chair" price="375" price2="400"/>
        </div>
        <div className="btn">
            <button type="button" class="btn btn-danger">View All Products</button>
        </div>     
        <hr />
    </div>
  )
}

export default SalesSection