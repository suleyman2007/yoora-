import React from 'react'
import './Integrations.css'
import img1 from '../../img/Integrations/Logo.png'
import img2 from '../../img/Integrations/Logo-8.png'
import img3 from '../../img/Integrations/Logo-5.png'
import img4 from '../../img/Integrations/Logo-2.png'
import img5 from '../../img/Integrations/Logo-7.png'
import img6 from '../../img/Integrations/Logo-9.png'
import img7 from '../../img/Integrations/Logo-3.png'
import img8 from '../../img/Integrations/Logo-1.png'
import img9 from '../../img/Integrations/Logo-4.png'
import img10 from '../../img/Integrations/Logo-6.png'
import img11 from '../../img/Integrations/Shape.png'


export default function Integrations() {
  return (
    <div className='Integrations'>
        <div className="container">
            <div className="Integrations-inner">
                <div className="integration-text">
                    <h2>Over 300+ integrations</h2>
                    <p>Expand the capabilities of Yoora with hundreds of apps and integrations</p>
                </div>
                <div className="imgs">
                    <div className="img1 img">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="img2 img">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="img3 img">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="img4 img">
                        <img src={img4} alt=""/>
                    </div>
                    <div className="img6 img">
                        <img src={img6} alt=""/>
                    </div>
                    <div className="img10 img">
                        <img src={img10} alt=""/>
                    </div>
                    <div className="img8 img">
                        <img src={img8} alt=""/>
                    </div>
                    <div className="img7 img">
                        <img src={img7} alt=""/>
                    </div>
                    <div className="img5 img" >
                        <img src={img5} alt="" />
                    </div>
                    <div className="img9 img" >
                        <img src={img9} alt=""/>
                    </div>
                </div>
                <div className="apps">
                    <p>See all apps and extensions</p>
                    <img src={img11} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
