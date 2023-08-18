import React from 'react'
import './footer.css'
import logo from '../../assets/upang.png'
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt='Logo ng Upang ito.' className="footer-image" />
      <p className='footerText'>PHINMA-University of Pangasinan</p>
      <p className='footerText'>College of Information Technology Education</p>
    </footer>
  )
}

export default Footer;