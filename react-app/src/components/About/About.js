import React from 'react'
import './About.css'

import derek from '../../images/about/derek.jpg'
import bryan from '../../images/about/bryan.png'
import justin from '../../images/about/justin.jpeg'
import logo from '../../images/splash/splash_title.png'





export default function About() {
	return (
    <div className='about-container'>
      <div className='about-container-header'>
        <h2>MEET OUR TEAM</h2>
      </div>

      <div className='about-container-header-sub'>

      </div>

      <div className='about-container-user-container'> 

      <div className='about-container-user-container-each'>
        <div className='about-container-user-container-each-img' ><img scr={derek} alt='derek image'/>  </div>
        <div><h4>Derek Roode</h4></div>
        <div><h4>Link</h4></div>
      </div>
      
      <div className='about-container-user-container-each'>
        <div className='about-container-user-container-each-img'> <img scr={bryan} alt='bryan image'/> </div>
        <div><h4>Bryan Burns</h4></div>
        <div><h4>Link</h4></div>
      </div>
      
      <div className='about-container-user-container-each'>
        <div className='about-container-user-container-each-img'> <img scr={justin} alt='justin image'/> </div>
        <div><h4>Justin Payne</h4></div>
        <div><h4>Link</h4></div>
      </div>
      

      </div>


    </div>
  )
}
