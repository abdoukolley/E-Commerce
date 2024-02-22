import React from 'react'
import '../Hero/Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>trendsetters</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <a href="#new"><div>Latest Collection</div></a>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero