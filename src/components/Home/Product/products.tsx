import Image from 'next/image'
import React from 'react'
import styles from './style.module.css'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import TitleHead from '@/components/TitleHeading/TitleHead'
const Products = () => {
    
    interface Products{
        image:string,
        title:string,
        price:number,
    }

    const products:Products[] = [
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPWvAEQTrb4OfGrNoEAdv9-eUs6ZONwuXY9Xqg6_Bju1GU4dDfKw5P-K7fRrrdzW8To8&usqp=CAU",
            title:'Atomic Habits',
            price:16.99,
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPWvAEQTrb4OfGrNoEAdv9-eUs6ZONwuXY9Xqg6_Bju1GU4dDfKw5P-K7fRrrdzW8To8&usqp=CAU",
            title:'Atomic Habits',
            price:16.99,
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPWvAEQTrb4OfGrNoEAdv9-eUs6ZONwuXY9Xqg6_Bju1GU4dDfKw5P-K7fRrrdzW8To8&usqp=CAU",
            title:'Atomic Habits',
            price:16.99,
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPWvAEQTrb4OfGrNoEAdv9-eUs6ZONwuXY9Xqg6_Bju1GU4dDfKw5P-K7fRrrdzW8To8&usqp=CAU",
            title:'Atomic Habits',
            price:16.99,
        },
    ]
  return (
    <section id="our-products" className={styles.ourProducts}>
    <Container>
        <TitleHead>Our Products</TitleHead>
        <div className={styles.productGrid}>
            {
                products.map((e,key) => {
                    return <div className={styles.productCard} key={key}>
                    <Image width={'100'} height={250} objectFit='cover' unoptimized src={e.image} alt={e.title}/>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{e.title}</h3>
                        <p className={styles.productPrice}>`${e.price}`</p>
                    </div>
                </div>
                })
            }
        </div>
        <div className={styles.viewAllProducts}>
            {/* <a href="products.html" className={styles.btn}>Show All Products</a> */}
            <Button routeName='products'>Show All Products</Button>
        </div>
    </Container>
</section>
  )
}

export default Products