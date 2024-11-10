import React from 'react'
import styles from './style.module.css'
import Container from '@/components/Container/Container'
import TitleHead from '@/components/TitleHeading/TitleHead'
const Testimonial = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
        <Container>
            <TitleHead>What Our Readers Say</TitleHead>
            <div className={styles.testimonialGrid}>
                {/* <!-- Testimonial 1 --> */}
                <div className={styles.testimonialItem}>
                    <p className={styles.testimonialText}>"Chromatic Reads has an incredible selection. I found books I couldn't find anywhere else!"</p>
                    <p className={styles.testimonialAuthor}>- Alex R.</p>
                </div>
                {/* <!-- Testimonial 2 --> */}
                <div className={styles.testimonialItem}>
                    <p className={styles.testimonialText}>"Fast delivery and excellent customer service. I highly recommend them!"</p>
                    <p className={styles.testimonialAuthor}>- Jamie L.</p>
                </div>
                {/* <!-- Testimonial 3 --> */}
                <div className={styles.testimonialItem}>
                    <p className={styles.testimonialText}>"The best online bookstore! I love the variety and the exclusive offers."</p>
                    <p className={styles.testimonialAuthor}>- Taylor M.</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Testimonial