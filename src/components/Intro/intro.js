import React from 'react'
import './intro.css'
import bg from '../../assets/paul.PNG'

const Intro = () => {
  return (
   <section id='intro'>
     <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>Paul</span>
      <br/>WebDev Student</span>
     </div>
    <img src={bg} alt="Profile"className='bg'/>
   </section>
  )
}

export default Intro;