import React from 'react'
import './education.css'
import UPANG from '../../assets/upang.png'
import CENTRAL1 from '../../assets/central1.PNG'
import VMUF from '../../assets/vmuf.png'
import STCHARLES from '../../assets/stcharles.png'

const Education = () => {
  return (
    <section id='education'>
        <span className='educationTitle'><h1>Education </h1></span>
            <div className='educBars'>
                <div className='educBar'>
                    <img src={CENTRAL1} className='educBarImg'/>
                    <div className='educBarText'>
                    <h2>Elementary</h2>
                    <p>Central 1 Elementary School San Carlos City Pangasinan</p>
                    </div>
                </div>
                <div className='educBar'>
                <img src={STCHARLES} className='educBarImg'/>
                <div className='educBarText'>
                    <h2>High School</h2>
                    <p>Saint Charles Academy HighSchool, San Carlos City Pangasinan</p>
                    </div>
                </div>
                <div className='educBar'>
                <img src={VMUF} className='educBarImg'/>
                <div className='educBarText'>
                    <h2>Senior High School</h2>
                    <p>Virgen Milagrosa University Foundation San Carlos City,Pangasinan</p>
                    </div>
                </div>
                <div className='educBar'>
                <img src={UPANG} className='educBarImg'/>
                <div className='educBarText'>
                    <h2>College</h2>
                    <p>PHINMA University of Pangasinan(Main Campus) Arellano St Dagupan.</p>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Education;