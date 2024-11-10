import Container from '@/components/Container/Container'
import styles from './style.module.css'
import TitleHead from '@/components/TitleHeading/TitleHead'
import Image from 'next/image'
const BestSelling = () => {
  interface Books{
    image:string,
    title:string,
    bookAuthor:string,
    price:number,
}
let books:Books[] = [
    {
        image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        title:'The Midnight Library',
        bookAuthor:'Matt Haig',
        price:14.99,
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPWvAEQTrb4OfGrNoEAdv9-eUs6ZONwuXY9Xqg6_Bju1GU4dDfKw5P-K7fRrrdzW8To8&usqp=CAU",
        title:'Atomic Habits',
        bookAuthor:'James Clear',
        price:16.99,
    },
    {
        image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        title:'The Alchemist',
        bookAuthor:'Paulo Coelho',
        price:12.99,
    },
    {
        image:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        title:'Educated',
        bookAuthor:'Tara Westover',
        price:15.99,
    },
]
  return (
    <section id="best-selling" className={`${styles.bestSelling}`}>
        <Container>
          <TitleHead>Best Selling Books</TitleHead>
          <div className={`${styles.bookGrid}`}>
                {books.map((e,key)=>{
                    return <div className={`${styles.bookCard}`} key={key}>
                        <Image width={100} height={350}   unoptimized src={e.image} alt="The Midnight Library"/>
                        <div className={`${styles.bookInfo}`}>
                            <h3 className={`${styles.bookTitle}`}>{e.title}</h3>
                            <p className={`${styles.bookAuthor}`}>{e.bookAuthor}</p>
                            <p className={`${styles.bookPrice}`}>{`$${e.price}`}</p>
                        </div>
                    </div>
                
                })}
                </div> 
        </Container>
    </section>
  )
}

export default BestSelling