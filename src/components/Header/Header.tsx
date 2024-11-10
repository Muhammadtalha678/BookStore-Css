'use client'

import Link from 'next/link'
import styles from './style.module.css'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
const Header = () => {
  const pathName = usePathname()
  console.log(pathName);
  
  const [isOpen,setIsOpen] = useState(false)
  const handleHamBurger = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Chromatic Reads</div>
        <ul className={`${styles.navLinks} ${isOpen ? `${styles.active}` : ''}`}>
            <li onClick={handleHamBurger} style={{color:pathName === '/'? '#f6ad55':''}}><Link href="/">Home</Link></li>
            <li onClick={handleHamBurger} style={{color:pathName === '/about-us'? '#f6ad55':''}}><Link href="/about-us">About</Link></li>
            <li onClick={handleHamBurger} style={{color:pathName === '/products'? '#f6ad55':''}}><Link href="/products">Products</Link></li>
            <li onClick={handleHamBurger} style={{color:pathName === '/contact'? '#f6ad55':''}}><Link href="/contact">Contact</Link></li>
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
