import exp from 'constants'
import React from 'react'
import styles from './style.module.css'
const Carousel = () => {
    // "background-image: url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');"
  return (
    <section id="home" className={styles.carousel}>
        <div className={`${styles.carouselItem} ${styles.active}`} 
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
            <div className={`${styles.carouselContent}`}>
                <h2>Welcome to Chromatic Reads</h2>
                <p>Dive into a world of vibrant stories and colorful characters</p>
                <a href="#best-selling" className={styles.btn}>Explore Best Sellers</a>
            </div>
        </div>
    </section>
  )
}

export default Carousel