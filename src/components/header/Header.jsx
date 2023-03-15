import React, { useState } from 'react'
import "./header.css"
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import Navbar from './Navbar';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='header'>
      <HeaderTop setToggle={setToggle} toggle={toggle}/>
      <HeaderMiddle />
      <Navbar toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default Header;
