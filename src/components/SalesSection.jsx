import React from 'react'
import Card from './Card'
import './saleSection.css'

const SalesSection = () => {
  return (
    <div className='saleSection'>
        <div className="writingPart">
          <h4>Today's</h4>
          <h1>Flash Sale</h1>
        </div>
        <div className="cardSection">
            <Card/>
        </div>
    </div>
  )
}

export default SalesSection