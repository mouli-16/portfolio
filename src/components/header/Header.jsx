import React from 'react'
import BTN from './buttons'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mouli Ghosh</h1>
        <h5 className="text-light">Full Stack Developer</h5>
       <BTN/>
       <HeaderSocials/>
       <div className="me">
         <img src={ME} alt="me" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
