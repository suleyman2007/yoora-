import React from 'react'
import './Asket.css'
import imgPlus from '../../img/pricing/asket/Shape (5).png'

export default function Asket() {
  return (
    <div className='Asket'>
        <div className="container">
            <div className="asket-inner">
                <h2>Frequently asked questions</h2>

                <div className="asket-blockT">
                    <hr className='blockT-line'/>
                    <div className="blockT-bl1">
                        <div className="bl1-teIm bl1">
                            <p >How Does Yoora CRM Compare To The Competition?</p>
                            <img className='bl1-img' src={imgPlus} alt="" />
                        </div>
                        <p className='bl1-teIm-text'>Yoora CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.</p>
                    </div>

                    <hr className='blockT-line'/>

                    <div className="bl1-teIm bl2">
                        <p>Can I Change Plans Or Cancel My Subscription At Any Time?</p>
                        <img src={imgPlus} alt="" />
                    </div>

                    <hr className='blockT-line'/>

                    <div className="bl1-teIm bl3">
                        <p>How Secure Is My Data With Yoora CRM?</p>
                        <img className='bl3-img' src={imgPlus} alt="" />
                    </div>

                    <hr className='blockT-line'/>

                    <div className="bl1-teIm bl4">
                        <p>What Is The Uptime Guarantee?</p>
                        <img className='bl4-img' src={imgPlus} alt="" />
                    </div>
                    <hr className='blockT-line'/>

                    <div className="bl1-teIm bl5">
                        <p>How Can I Add More Emails To My Account?</p>
                        <img className='bl5-img' src={imgPlus} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
