import styles from '@/components/Home/Product/style.module.css'
import Image from 'next/image'
type Props = {
    image:string,
    title:string,
    price:number
} 
const ProductCard = (props:Props) => {
  return (
   <div className={styles.productCard}>
    <Image width={'100'} height={250} objectFit='cover' unoptimized src={props.image} alt={props.title}/>
    <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{props.title}</h3>
        <p className={styles.productPrice}>`${props.price}`</p>
    </div>

   </div>
  )
}

export default ProductCard