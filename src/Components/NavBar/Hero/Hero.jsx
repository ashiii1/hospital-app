import React from 'react'
import './Hero.css'

const Hero = ({ onScroll }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Recuenco General Hospital</h1>
        <p>
          Our hospital is dedicated to providing you 
          with the best possible care in a compassionate 
          and excellent manner. We go above and 
          beyond treatment to give you and your 
          family the solace, confidence, and recovery 
          you deserve
        </p>
        <button className="Btn" onClick={onScroll}>
          Book Appointment <img src="" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero