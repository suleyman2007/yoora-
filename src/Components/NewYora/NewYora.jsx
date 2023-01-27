import React from 'react'
import './NewYora.css'
import img1 from '../../img/newYora/Image-1.png'
import img2 from '../../img/newYora/Image.png'

export default function NewYora() {
  return (
    <div className='NewYora'>
        <div className="container">
            <div className="new-yora__inner">
              <div className="Answer">
                <p>What’s new at Yoora?</p>
                <span>See all</span>
              </div>
              <div className="Answers">
                <div className="Answers_1">
                  <p className='ans-t'>Service</p>
                  <hr />
                  <img src={img1} alt="" />
                  <p className='ans-n'>How To Deliver a Successful Product Launch</p>
                  <p className='tuyes'>05 Sep 2022,<span> by Joshua Nash </span></p>
                </div>
                <div className="Answers_1">
                  <p className='ans-t'>Service</p>
                  <hr />
                  <img src={img2} alt="" />
                  <p className='ans-n-2'>What Makes an Authentic Employee Profile, and Why Does It Matter?</p>
                  <p className='tuyes'>07 Sep 2022,<span> by Joshua Nash </span></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
