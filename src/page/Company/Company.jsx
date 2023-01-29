import React from 'react'
import './Company.css'
import Nav from '../Nav/Nav'
import imgC from '../../img/componya/Image.png'
import Strong from '../../Components-2/Strong/Strong'
import Team from '../../Components-2/Team/Team'
import Question from '../../Components-2/Question/Question'
import Footer from '../../Components/Footer/Footer'

export default function Company() {
  return (
    <div className='Company'>
      <div className="container">
        <Nav/>
        <div className="Company-inner">
          <h2 className="Company-title">
            We build bridges between <span className='title-col'>companies and customers</span>
          </h2>
          <p>To build software that gives customer-facing teams at small- and medium-sized businesses the ability to create fruitful and enduring relationships with customers.</p>
        </div>
      </div>
      <img className='imgC' src={imgC} alt="" />
      <Strong/>
      <Team/>
      <Question/>
      <Footer/>

    </div>
  )
}
