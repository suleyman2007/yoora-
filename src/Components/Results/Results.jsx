import React from 'react'
import './Results.css'
import img1 from '../../img/Results/Oval (1).png'
import img2 from '../../img/Results/Oval (2).png'

export default function Results() {
  return (
    <div className='Results'>
        <div className="container">
            <div className="results-inner">
                <div className="results-text">
                    <h2>Real-life results and revenue</h2>
                    <p>See how companies like yours have smashed their sales success goals</p>
                </div>
                <hr />
                <div className="generate-sales">
                    <div className="dooll">
                        <h2>$2.5 M</h2>
                        <p>Generate sales</p>
                    </div>
                    <div className="sals-usr">
                        <p className='usr-info'>Using Yoora CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.</p>
                        <div className="urs-user">
                            <img src={img1} alt="" />
                            <div className="user-name">
                                <p>Nellie Foster</p>
                                <span>Founder & CEO, Foster Business Strategies</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="generate-sales">
                    <div className="dooll">
                        <h2>45%</h2>
                        <p>Grew revenues</p>
                    </div>
                    <div className="sals-usr sals-usr2">
                        <p className='usr-info usr-info2'>Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
                        <div className="urs-user">
                            <img src={img2} alt="" />
                            <div className="user-name">
                                <p>Lawrence Gibbs</p>
                                <span>Digital Marketing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
