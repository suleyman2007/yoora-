import React from 'react'
import './Strong.css'
import img1 from '../../img/componya/user_shaw/Oval.png'

export default function Strong() {
  return (
    <div className='Strong'>
      <div className="container">
        <hr />
        <div className="strong-we">
          <h2 className='strong-we-h2'>Together we are strong</h2>
          <div className="we-text">
            <p className='we-text-inner1'>Our crew is always getting bigger, but we all work toward one goal: to make sales success not only possible but inevitable for teams everywhere.</p>
            <p className='we-text-inner2'>In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </div>
        </div>
        <div className="user-info">
          <div className="user_shaw">
              <img src={img1} alt="" />
              <div className="user_name">
                <p>Brandon Shaw</p>
                <p>Founder & CEO</p>
              </div>
          </div>
          <div className="user-info-text">
            <p>“Our goal is to build software that gives customer-facing teams at SMBs the ability to create fruitful and enduring relationships with customers.”</p>
          </div>
        </div>

        <hr />
        <div className="Strong-static">
          <div className="static-block-1">
            <p>Team member vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis. </p>
            <h2>290+</h2>
          </div>
          <div className="static-block-1">
            <p>Year experience vero eos et accusamus dignissimos ducimus qui blanditiis praesentium.  </p>
            <h2>12+</h2>
          </div>
          <div className="static-block-1">
            <p>Lovely customers vero eos et accusamus et iusto odio qui blanditiis praesentium.  </p>
            <h2>20K+</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
