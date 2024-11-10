import Products from '@/components/Home/Product/products'
import styles from '../../components/Home/Product/style.module.css'
import React from 'react'
import Container from '@/components/Container/Container'
import TitleHead from '@/components/TitleHeading/TitleHead'
import ProductCard from '@/components/ProductCard/ProductCard'

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

const Product = () => {
  return (
    <section id="our-products" className={styles.ourProducts}>
        <Container>
            <TitleHead>All Books</TitleHead>
            <div className={styles.productGrid}>
                {products.map((e,key)=>{
                    return  <ProductCard image={e.image} price={e.price} title={e.title} key={key}/>
                })}
                
            </div>
        </Container>
    </section>

  )
}
export default Product