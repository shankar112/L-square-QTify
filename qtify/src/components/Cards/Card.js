import React from 'react'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src='' alt='AlbumImage' width={159}/>
            </div>
            <div className={styles.cardBtn}>
                <button className={styles.btn}>100 followers</button>
            </div>
        </div>
        <div>New Bollyhood</div>
    </div>
  )
}

export default Card