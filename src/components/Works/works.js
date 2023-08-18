import React from 'react'
import './works.css'
import Works1 from '../../assets/paykana.jpg'

const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDescription'>My works as a Web Development Student.</span>
       <div className='worksImgs'>
        <img src={Works1} className='worksImg'></img>
       </div>
    </section>
  )
}

export default Works;