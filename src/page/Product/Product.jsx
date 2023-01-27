import React from 'react'
import Nav from '../Nav/Nav'
import './Product.css'
import statik from '../../img/Product/static.png'
import img2 from '../../img/Product/Google.svg'
import img3 from '../../img/Product/Atlassian.svg'
import img4 from '../../img/Product/Canon.svg'
import img5 from '../../img/Product/Walmart.svg'
import img6 from '../../img/Product/Amazon.svg'
import How from '../../Components/How/How'
import Sales from '../../Components/Sales/Sales'
import Integrations from '../../Components/Integration/Integrations'
import NewYora from '../../Components/NewYora/NewYora'
import Results from '../../Components/Results/Results'
import Customer from '../../Components/Customer/Customer'
import Beznis from '../../Components/Beznis/Beznis'
import Footer from '../../Components/Footer/Footer'

export default function Product() {
  return (
    <div className='Product'>        
        <div className="container">
          <Nav/>
          <div className="Product-inner">
            <div className="Product__info">
                <div className="info">
                  <h2>Bringing companies and customers together, anywhere</h2>
                  <p className='info-text'>An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
                  
                  <div className="btn-emil">
                    <input type="email" placeholder='Enter your email'/>
                    <button>Try for Free</button>
                  </div>
                  <p className='full'>Full access. No credit card required.</p>
                </div>

                <div className="Product__imgStatic">
                  <img src={statik} alt="" />
                </div>
            </div>

            <div className="Product__foot">
                <p>Trusted by 1,000+ customers</p>
                <div className="imgss">
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                  <img src={img4} alt="" />
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                </div>
            </div>

          </div>
        </div>
        <How/>
        <Sales/>
        <Integrations/>
        <NewYora/>
        <Results/>
        <Customer/>
        <Beznis/>
        <Footer/>
    </div>
  )
}
