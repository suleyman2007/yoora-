import React from 'react'
import './Footer.css'
import logo from '../../img/nav/Symbol.png'
import fc from '../../img/Footer/Facebook.png'
import twt from '../../img/Footer/Twitter.png'
import ln from '../../img/Footer/Linkedin.png'
import lung from '../../img/Footer/ic_language.png'

export default function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="Footer-inner">
              <div className="Footer-List">
                <div className="list-1 list-footer">
                  <div className="logo-nav">
                      <img src={logo} alt="" />
                      <p>Yoora</p>
                  </div>
                  <div className="logo-txt">
                    <p className='list1-text'>We built an elegant solution. 
                    Our team created a fully integrated sales and marketing solution for SMBs</p>
                    <div className="imgs-logos">
                      <img src={twt} alt="" />
                      <img src={fc} alt="" />
                      <img src={ln} alt="" />
                    </div>
                  </div>
                </div>
                <div className="list-2 list-footer list-footer-li">
                  <p>Company</p>
                  <ul className='footer-list_item'>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Jobs</li>
                    <li>Blog</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div className="list-3 list-footer list-footer-li">
                  <p>Product</p>
                  <ul className='footer-list_item'>
                    <li>Sales software</li>
                    <li>Features</li>
                    <li>Privacy and security </li>
                    <li>Status</li>
                    <li>API</li>
                  </ul>
                </div>
                <div className="list-4 list-footer list-footer-li">
                  <p>Discover</p>
                  <ul className='footer-list_item'>
                    <li>Partner Program</li>
                    <li>Get our newsletter</li>
                    <li>Sales Pipeline Course</li>
                    <li>What is CRM?</li>
                    <li>Resources</li>
                  </ul>
                </div>
                <div className="list-5 list-footer list-footer-li">
                  <p>Help Center</p>
                  <ul className='footer-list_item'>
                    <li>Community</li>
                    <li>Knowledge Base</li>
                    <li>Academy</li>
                    <li>Support</li>
                  </ul>
                </div>
              </div>
              <hr className='footer-line'/>
              <div className="fooetr-end">
                <p className='inc'>© Copyright 2022 Yoora, Inc.</p>
                <div className="list-end">
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                  <p>Cookies</p>
                </div>
                <div className="lungers-end">
                  <img src={lung} alt="" />
                  <select>
                    <option value="eng">English</option>
                    <option value="Ru">Russion</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
