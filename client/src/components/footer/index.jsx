import React from 'react'
import PropTypes from 'prop-types'
import financeLogo from '../../assets/footer-logo1.png'
import frenchLogo from '../../assets/footer-logo2.png'
import './style.css'

function Footer(props) {
  return (
    <div className='footer-wrapper'>
      <div className='left-section'>
        <div className='footer-brand-name'>Legal notices / Personal data | Accessibility: partially compliant</div>
      </div>
      <div className='nav-list'>
        <img src={financeLogo} className="footer-brand-logo" />
        <img src={frenchLogo} className="footer-brand-logo" />
      </div>

    </div>
  )
}

Footer.propTypes = {}

export default Footer
