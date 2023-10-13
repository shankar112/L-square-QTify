import React from 'react'
import styles from './HeroSection.module.css'
import vibratingHeadphone from '../../assets/vibrating-headphone-1.png'

const HeroSection = () => {
  return (
    <div className={styles.hero}>      
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={vibratingHeadphone} alt='Headphone' width={212}/>
      </div>
    </div>
  )
}

export default HeroSection