import Container from '@/components/Container/Container'
import styles from './style.module.css'
import TitleHead from '@/components/TitleHeading/TitleHead'

const ContactUs = () => {
  return (
    <section id="contact" className={styles.contactUs}>
        <Container>
            <TitleHead>Contact Us</TitleHead>
            <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                        <input type="text" id="name" name="name" className={styles.formInput} placeholder="Your Name"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <input type="email" id="email" name="email" className={styles.formInput} placeholder="Your Email"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                        <textarea id="message" name="message" className={styles.formTextarea} placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
        </Container>
    </section>
  )
}

export default ContactUs