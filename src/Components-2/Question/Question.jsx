import React from 'react'
import './Question.css'
import img1 from '../../img/componya/question/Image.png'

export default function Question() {
  return (
    <div className='Question'>
        <div className="container">
            <div className="question-inner">
                <div className="question-text">
                    <h2>Have a question? Our team is happy to assist you</h2>
                    <p className='text-ques'>Ask about Yoora products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.</p>
                    <hr className='hr-question'/>
                    <div className="button-US">
                        <button>Contact Us</button>
                        <p>Or call +12 3456 7890</p>
                    </div>
                </div>
                <div className="img-ques">
                    <div className="Cubes"></div>
                    <div className="Round2"></div>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
