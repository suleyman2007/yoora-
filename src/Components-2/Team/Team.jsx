import React from 'react'
import './Team.css'
import img1 from '../../img/componya/team-user/Image-7.png'
import img2 from '../../img/componya/team-user/Image-6.png'
import img3 from '../../img/componya/team-user/Image-5.png'
import img4 from '../../img/componya/team-user/Image-4.png'
import img5 from '../../img/componya/team-user/Image-3.png'
import img6 from '../../img/componya/team-user/Image-2.png'
import img7 from '../../img/componya/team-user/Image-1.png'
import img8 from '../../img/componya/team-user/Image.png'
import img9 from '../../img/componya/team-user/ic_keyboard_arrow_right.png'

export default function Team() {
  return (
    <div className='Team'>
        <div className="container">
            <div className="team-inner">
                <h2 className='team-inner_text'>Meet our amazing team</h2>
                <hr className='team-line' />
                <div className="team-user">
                    <div className="user-team-1 user-team">
                        <img src={img1} alt="" />
                        <p>Brandon Shaw</p>
                        <span>Founder & CEO</span>
                    </div>
                    <div className="user-team">
                        <img src={img2} alt="" />
                        <p>Floyd Stephens</p>
                        <span>Chief Technology Officer</span>
                    </div>
                    <div className="user-team">
                        <img src={img3} alt="" />
                        <p>Kate Clark</p>
                        <span>Director of People</span>
                    </div>
                    <div className="user-team">
                        <img src={img4} alt="" />
                        <p>Eunice Doyle</p>
                        <span>Software Engineer</span>
                    </div>
                    <div className="user-team">
                        <img src={img5} alt="" />
                        <p>Virginia Aguilar</p>
                        <span>Software Engineer</span>
                    </div>
                    <div className="user-team">
                        <img src={img6} alt="" />
                        <p>Jeffrey Goodwin</p>
                        <span>Sr Manager, Content and Growth</span>
                    </div>
                    <div className="user-team">
                        <img src={img7} alt="" />
                        <p>Beatrice Williamson</p>
                        <span>Product Designer</span>
                    </div>
                    <div className="user-team">
                        <img src={img8} alt="" />
                        <p>Roger Dawson</p>
                        <span>Senior Account Executive</span>
                    </div>
                </div>

                <hr className='join-line'/>
                <div className="Join">
                    <p className="join-p">Join our team</p>
                    <div className="join-text">
                        <p className='join-text_post'>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>
                        
                        <p className='join-com'>See open positions <img className='join-com_img' src={img9} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
