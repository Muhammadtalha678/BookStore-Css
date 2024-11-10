import Container from '@/components/Container/Container'
import styles from './style.module.css'
import TitleHead from '@/components/TitleHeading/TitleHead'
const About = () => {
  return (
    <section id="about" className={styles.aboutUs}>
        <Container>
            <TitleHead>Why Shop With Us</TitleHead>
                <div className={styles.serviceContainer}>
                <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>🚀</div>
                    <h3 className={styles.serviceTitle}>Fast Delivery</h3>
                    <p className={styles.serviceDescription}>We ensure quick delivery with multiple shipping options available.</p>
                </div>
                {/* Service 2 */}
                <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>🔒</div>
                    <h3 className={styles.serviceTitle}>Secure Payments</h3>
                    <p className={styles.serviceDescription}>All transactions are protected with industry-leading security.</p>
                </div>
                {/* Service 3 */}
                <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>💬</div>
                    <h3 className={styles.serviceTitle}>24/7 Support</h3>
                    <p className={styles.serviceDescription}>Our support team is here to help you any time, day or night.</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About