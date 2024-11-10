'use client'

import styles from './style.module.css'
import {useRouter} from 'next/navigation'

type Props = {
    children : React.ReactNode,
    routeName: string
}
const Button = ({children,routeName}:Props) => {
    const router = useRouter()
  return (
        <a className={styles.btn} onClick={()=>router.push(`/${routeName}`)}>{children}</a>
  )
}

export default Button