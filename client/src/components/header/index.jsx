import React from 'react'
import PropTypes from 'prop-types'
import logoImage from '../../assets/logo.png'
import './style.css'

function Header(props) {
  return (
    <div className='header-wrapper'>
      <div className='left-section'>
        <img src={logoImage} className='logo-image' alt='logo' />
        <div className='brand-name'>Posting of Workers in France</div>
      </div>
      <div className='nav-list'>
        {/* <div  className='navList-item navList-item-active'>Test</div> */}
        <div className='navList-item'>Home</div>
        <div className='navList-item'>FAQ</div>
        <div className='navList-item'>CONTACT</div>
        <div className='navList-item'>My Account</div>
        <div className='navList-item navList-item-active'>Admin</div>
        <div className='logout-btn'>
          <p>Logout</p>
        </div>
      </div>

    </div>
  )
}

Header.propTypes = {}

export default Header
