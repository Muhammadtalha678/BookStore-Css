import styles from './style.module.css'

type Props = {
    children:React.ReactNode
}
const TitleHead = ({children}:Props) => {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}

export default TitleHead