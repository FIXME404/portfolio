import styles from './TestimonialsSection.module.scss';
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';

function TestimonialsSection() {
  useEffect(() => {
    aos.init({ duration: 2000 });

    return () => aos.init({ duration: 0 });
  }, []);

  return (
    <section id='testimonials' className={styles['testimonials-section']} data-aos='zoom-in-up' data-aos-once='true'>
      {/* Section content */}
      <div className={styles['testimonials-section__content']}>
        {/* Heading */}
        {/* <h2 className={styles['testimonials-section__content--heading']}>What others say about me.</h2> */}
      </div>

      {/* Testimonials */}
      <div className={styles['testimonials-section__content--testimonials']}>
        {/* Testimonial 1 *******/}
        <div className={styles['testimonials-section__content--testimonials__testimonial']}>
          {/* Image */}
          <div className={styles['testimonials-section__content--testimonials__testimonial--img']}></div>
          {/* Name */}
          <h3 className={styles['testimonials-section__content--testimonials__testimonial--name']}>John Doe</h3>
          {/* Info */}
          <p className={styles['testimonials-section__content--testimonials__testimonial--info']}>CEO of XYZ Company</p>
          {/* Testimonial */}
          <p className={styles['testimonials-section__content--testimonials__testimonial--para']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl. Sed euismod, nisl vel tincidunt
            lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
