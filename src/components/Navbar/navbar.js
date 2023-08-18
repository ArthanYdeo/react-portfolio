import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
   <nav className='navbar'>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Work</Link>
        </div>
        
   </nav>
  )
}

export default Navbar