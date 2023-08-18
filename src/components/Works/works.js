import React from 'react'
import './works.css'
import Works1 from '../../assets/paykana.jpg'

const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDescription'>My work as a Web Development Student.</span>
       <div className='worksImgs'>
        <img src={Works1} className='worksImg'></img>
        <h3>Pay Kana</h3>
        <p>Description:</p>
       </div>
    </section>
  )
}

export default Works;