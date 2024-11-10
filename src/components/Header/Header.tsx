'use client'

import Link from 'next/link'
import styles from './style.module.css'
import {useState} from 'react'
const Header = () => {
  const [isOpen,setIsOpen] = useState(false)
  const handleHamBurger = () => {
    console.log(isOpen);
    
    setIsOpen(!isOpen)
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Chromatic Reads</div>
        <ul className={`${styles.navLinks} ${isOpen ? `${styles.active}` : ''}`}>
            <li onClick={handleHamBurger}><Link href="/">Home</Link></li>
            <li onClick={handleHamBurger}><Link href="#best-selling">Best Sellers</Link></li>
            <li onClick={handleHamBurger}><Link href="#categories">Categories</Link></li>
            <li onClick={handleHamBurger}><Link href="/about-us">About</Link></li>
            <li onClick={handleHamBurger}><Link href="#contact">Contact</Link></li>
        </ul>
        <div className={`${styles.hamburger} ${isOpen ?   `${styles.active}` : ''}`} onClick={handleHamBurger}>
            <div className={`${styles.line1}`}></div>
            <div className={`${styles.line2}`}></div>
            <div className={`${styles.line3}`}></div>
        </div>
    </nav>
    </header>
  )
}

export default Header
