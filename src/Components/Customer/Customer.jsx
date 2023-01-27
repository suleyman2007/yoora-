import React from 'react'
import './Customer.css'
import img1 from '../../img/customers/“.png'
import img2 from '../../img/customers/Oval-2.png'
import img3 from '../../img/customers/Oval-1.png'
import img4 from '../../img/customers/Oval.png'

export default function Customer() {
  return (
    <div className='Customer'>
        <div className="container">
            <div className="customer-inner">
                <div className="welo">
                    <p>We love our Customers and They love us too</p>
                    <span>See all</span>
                </div>

                <div className="customers-block">
                    <div className="block-1">
                        <img className='block-img1' src={img1} alt="" />
                        <hr />
                        <p className='block-inf'>The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.</p>
                        <div className="block-user">
                            <img src={img2} alt="" />
                            <div className="user-name">
                                <p>Lola Ross</p>
                                <span>Digital Marketing Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="block-1">
                        <img className='block-img1' src={img1} alt="" />
                        <hr />
                        <p className='block-inf'>It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.</p>
                        <div className="block-user">
                            <img src={img3} alt="" />
                            <div className="user-name">
                                <p>Daisy Phelpss</p>
                                <span>Speaker and Author, Lifeiseasy</span>
                            </div>
                        </div>
                    </div>
                    <div className="block-1">
                        <img className='block-img1' src={img1} alt="" />
                        <hr />
                        <p className='block-inf'>Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!</p>
                        <div className="block-user block-user3">
                            <img src={img4} alt="" />
                            <div className="user-name">
                                <p>Andrew Wilkins</p>
                                <span>Managing Director, Nirma Studio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
