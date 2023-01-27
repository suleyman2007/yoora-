import React from 'react'
import './Sales.css'
import img1 from '../../img/Sales/ic_done.png'
import img2 from '../../img/Sales/Image (1).png'
import img3 from '../../img/Sales/ic_account_balance_wallet.png'
import img4 from '../../img/Sales/Mobile.png'
import img5 from '../../img/Sales/Image (2).png'

export default function Sales() {
  return (
    <div className='Sales'>
        <div className="container">
        <hr />
           <div className="sales-inner">
                <div className="sales-info">
                    <p className='info-title'>Sales</p>
                    <h2 className='revenue'>Increase company revenue up to 65%</h2>
                    <p className='info-text'>Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. </p>
                    
                    <div className="Atask Atask-text1">
                      <img src={img1} alt="" />
                      <p>Close more deals with single-page contact management</p>
                    </div>
                    <div className="Atask Atask-text2">
                      <img src={img1} alt="" />
                      <p>Enjoy one-click calling, call scripts and voicemail automation</p>
                    </div>
                    <div className="Atask Atask-text2">
                      <img src={img1} alt="" />
                      <p>Track stages and milestones of your deals to keep the sales process on track</p>
                    </div>
                </div>
                <div className="sales_img">
                    <img className='img-bloack' src={img2} alt="" />
                    <div className="incom">
                      <div className="in-text">
                        <p className='doll'>$1,096.30</p>
                        <img src={img3} alt="" />
                        <p className='dai'>Daily average income</p>
                      </div>
                      <div className="staric-line">
                        <div className='line-2'></div>
                        <span>65%</span>
                      </div>
                    </div>
                </div>
           </div>
           <hr className='line-3' />
            <div className="Marketing">
              <div className="sales_img-2">
                <img className='mark-img' src={img4} alt="" />
                <div className="Automate">
                  <p>Automate your sales & marketing</p>
                  <button>Start now</button>
                </div>
              </div>
              <div className="Marketing-info">
                <p className="Marketing-warning">Marketing</p>
                <h2 className='Marketing-title'>Marketing Automation</h2>
                <p className='market-info'>Market like the most successful companies in the world with Agile CRM's marketing automation software. </p>

                <div className="Atask Atask-text1">
                  <img src={img1} alt="" />
                  <p>Marketing workflows with an easy drag-and-drop designer</p>
                </div>
                <div className="Atask Atask-text1">
                  <img src={img1} alt="" />
                  <p>Use our templates to create high converting, mobile responsive landing pages</p>
                </div>
                <div className="Atask Atask-text1">
                  <img src={img1} alt="" />
                  <p>Integrate social media easily into your marketing campaigns & contact views</p>
                </div>
              </div>
            </div>
            <hr className='line-4'/>
            <div className="Service">
            <div className="Service-info">
                <p className="Service-warning">Service</p>
                <h2 className='Service-title'>Help Desk Software</h2>
                <p className='Service-info'>Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. </p>

                <div className="Atask Atask-text1">
                  <img src={img1} alt="" />
                  <p>Resolve every issue in the shortest possible time with powerful ticketing features</p>
                </div>
                <div className="Atask Atask-text1">
                  <img src={img1} alt="" />
                  <p>Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</p>
                </div>
                <div className="Atask Atask-text1">
                  <img src={img1} alt="" />
                  <p>Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard</p>
                </div>
              </div>
              <div className="Service_img-3">
               <div className="ServiceImg-inner">
                <div className="lead">
                  <p>Lead Discovered</p>
                  <div className="line-lead"></div>
                </div>
                <div className="card-raect">
                <h2 className='user-name'>Curva React Development</h2>

                  <div className="block">
                    <img src={img5} alt="" />
                    <div className="line-lead-2"></div>
                  </div>
                  <hr />
                  <div className="im-lin">
                    <p>Curva Technologies</p>
                    <div className="line-lead-3"></div>
                    <div className="line-lead-4"></div>

                    <div className="line-img"></div>
                    <div className="days">
                      <div className="days-tasks-day">
                        <div className="Dot"></div>
                        <p>Meeting with James</p>
                      </div>
                      <div className="Days-and-times">
                        <p className='and-timI'>Yesterday at 8:30 AM</p>
                      </div>
                    </div>
                    <div className="days">
                      <div className="days-tasks-day">
                        <div className="Dot"></div>
                        <p>Full-team meeting</p>
                      </div>
                      <div className="Days-and-times">
                        <p className='and-tim1'>Monday at 8:30 AM</p>
                      </div>
                    </div>
                    <div className="days">
                      <div className="days-tasks-day">
                        <div className="Dot"></div>
                        <p>Product Demo</p>
                      </div>
                      <div className="Days-and-times">
                        <p className='and-tim2'>Monday at 10:30 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}
