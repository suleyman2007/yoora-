import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import logo from '../../img/nav/Symbol.png'

export default function Nav() {
  return (
    <div className='Nav'>
        <div className="conataner">
            <div className="nav-inner">
                <div className="logo-nav">
                    <img src={logo} alt="" />
                    <p>Yoora</p>
                </div>
                <nav>
                    <ul className='nav__List'>
                        <li>
                            <Link to="/">Product</Link>
                        </li>
                        <li>
                            <Link to="/Company">Company</Link>

                        </li>
                        <li>
                            <Link to="/Pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/Blog">Recources</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="buttons">
                    <button className='btn-in'>Log In</button>
                    <button className='btn-free'>Try for Free</button>
                </div>
            </div>
        </div>
    </div>
  )
}
