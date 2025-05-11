import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/men.png"

const Hero = () => {
    return (
        <div className="hero">
        <div className="hero-left">
          <h2 className="hero-subtitle">🔥 Best Deals · Fresh Fits</h2>
      
          <p className="hero-title">
            <span className="highlight">New Collections</span><br />
            <span className="accent">For Everyone</span>
          </p>
      
          <div className="hero-hand-icon">
            {/* Optional icon or emoji */}
          </div>
      
          <button className="hero-latest-btn">
            Latest Collection →
          </button>
        </div>
      
        <div className="hero-right">
           <img src={men} alt="" height="400px" />
        </div>
      </div>
      
      )
    }

export default Hero;