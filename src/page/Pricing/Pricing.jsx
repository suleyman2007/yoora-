import React from 'react'
import './Pricing.css'
import Nav from '../Nav/Nav'
import imgICON from '../../img/pricing/card/ic_done (1).png'
import Asket from '../../Components-3/Asket/Asket'
import Footer from '../../Components/Footer/Footer'
import Beznis from '../../Components/Beznis/Beznis'

export default function Pricing() {
  return (
    <div className='Pricing'>
      <div className="container">
        <Nav/>
        <div className="pricing-inner">
          <div className="pricing-inner-text">
            <h2>Choose the right plan <span className='title-col'>for your business</span></h2>
            <p>Built with love for growing businesses. Check out the Yoora CRM pricing grid below. Switch between plans at any time.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-cards_1">
              <p className='pri-title'>Starter</p>
              <p className="card-inf">Get organized and set up simple sales processes lorem ipsum</p>
              <p className="Price">$8,90 <sub>/month</sub></p>
              <button className='piricing-button'>Try for Free</button>
              <span>Free 14-day trial. No credit card required.</span>
              <hr />
              <div className="pricing-free">
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>2 team members</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>1,000 Contacts & Companies</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>5 Campaign Workflows</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>10 Nodes Per Campaign</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>5 Automation Rules (Triggers)</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>3 Plugins/Integrations</p>
                </div>
                <div className="pricing-free-text pricing-free-text-opo">
                  <img src={imgICON} alt="" />
                  <p><s>Marketing Automation</s></p>
                </div>
                <div className="pricing-free-text pricing-free-text-opo">
                  <img src={imgICON} alt="" />
                  <p><s>Custom Deal Tracks</s></p>
                </div>
                <div className="pricing-free-text pricing-free-text-opo">
                  <img src={imgICON} alt="" />
                  <p><s>Automated Voicemails	</s></p>
                </div>
                <div className="pricing-free-text pricing-free-text-opo">
                  <img src={imgICON} alt="" />
                  <p><s>Post-call Automation</s></p>
                </div>
              </div>
            </div>

            <div className="pricing-cards_1">
              <div className="pricing-tetle-reco">
                <p className='pri-title'>Professional</p>
                <p className='recomend'>Recommended</p>
              </div>
              <p className="card-inf">Get organized and set up simple sales processes lorem ipsum</p>
              <p className="Price">$29,90 <sub>/month</sub></p>
              <button className='piricing-button piricing-button-2'>Try for Free</button>
              <span>Free 14-day trial. No credit card required.</span>
              <hr />
              <div className="pricing-free">
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>10 team members</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>2,500 Contacts & Companies</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>5 Campaign Workflows</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>10 Nodes Per Campaign</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>5 Automation Rules (Triggers)</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>3 Plugins/Integrations</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Marketing Automation</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Custom Deal Tracks</p>
                </div>
                <div className="pricing-free-text pricing-free-text-opo">
                  <img src={imgICON} alt="" />
                  <p><s>Automated Voicemails	</s></p>
                </div>
                <div className="pricing-free-text pricing-free-text-opo">
                  <img src={imgICON} alt="" />
                  <p><s>Post-call Automation</s></p>
                </div>
              </div>
            </div>

            <div className="pricing-cards_1">
              <p className='pri-title'>Enterprise</p>
              <p className="card-inf">Get organized and set up simple sales processes lorem ipsum</p>
              <p className="Price">$39,90 <sub>/month</sub></p>
              <button className='piricing-button'>Try for Free</button>
              <span>Free 14-day trial. No credit card required.</span>
              <hr />
              <div className="pricing-free">
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Unlimited team members</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>5,000 Contacts & Companies</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>25 Campaign Workflows</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>20 Nodes Per Campaign</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>15 Automation Rules (Triggers)</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>10 Plugins/Integrations</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Marketing Automation</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Custom Deal Tracks</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Automated Voicemails	</p>
                </div>
                <div className="pricing-free-text">
                  <img src={imgICON} alt="" />
                  <p>Post-call Automation</p>
                </div>
              </div>
            </div>

          </div>

          <hr className='reed-line'/>

          <div className="need">
            <p>Need help choosing the right plan?</p>

            <div className="buttons-need">
              <button className='need_button1'>Contact sales</button>
              <button className='need_button2'>Compare plans</button>
            </div>
          </div>
        </div>
      </div>
      <Asket/>
      <Beznis />
      <Footer />
    </div>
  )
}
