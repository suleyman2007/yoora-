import React from 'react'
import './How.css'
import img1 from '../../img/haw/Icon-2.png'
import img2 from '../../img/haw/Icon-1.png'
import img3 from '../../img/haw/Icon.png'

export default function How() {
  return (
    <div className='How'>
        <div className="container">
            <div className="how-text">
                <p className='text_1'>Here's how Yoora can benefit your business</p>
                <p className='text_2'>Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
            </div>
            <div className="cards">
                <div className="card card-1">
                    <img src={img1} alt="" />
                    <div className='line'></div>
                    <p className='card-title'>Lead customers to happiness</p>
                    <p className='card-text'>Yoora Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
                <div className="card card-2">
                    <img src={img2} alt="" />
                    <div className='line'></div>
                    <p className='card-title'>Support your support</p>
                    <p className='card-text'>Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
                </div>
                <div className="card card-3">
                    <img src={img3} alt="" />
                    <div className='line'></div>
                    <p className='card-title'>Grow without growing pains</p>
                    <p className='card-text'>Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
