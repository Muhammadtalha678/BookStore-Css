import React from 'react'
import styles from './style.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Chromatic Reads. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer