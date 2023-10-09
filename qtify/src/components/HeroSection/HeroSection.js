import React from 'react'
import styles from './HeroSection.module.css'
import vibratingHeadphone from '../../assets/vibrating-headphone-1.png'

const HeroSection = () => {
  return (
    <div className={styles.hero}>
        <div>
            <div className={styles.heroContent}>
                <h3>100 Thousand Songs, ad-free</h3>
                <h3>Over thousands podcast episodes</h3>
            </div>
            <div className={styles.vibratingHeadphone}>
                <img src={vibratingHeadphone} alt='Headphone' width={212}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection