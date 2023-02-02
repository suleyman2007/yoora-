import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import './Burger.css'
import { Link } from 'react-router-dom';

export default function Burger() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div className='Burger'>
      <Button className='open-B'  onClick={showDrawer}>
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div> 
      </Button>
      <Drawer className='drawe' placement="right" onClose={onClose} open={open}>
        <ul className='nav__List nav__List-bur'>
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

        <div className="buttons-bur buttons-bur-burger">
            <button className='btn-in'>Log In</button>
            <button className='btn-free btn-free-b'>Try for Free</button>
        </div>
      </Drawer>
    </div>
  )
}
