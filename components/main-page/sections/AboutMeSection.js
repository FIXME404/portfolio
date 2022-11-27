import styles from './AboutMeSection.module.scss';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Portrait from '../../../public/imgs/portrait.png';

function AboutMeSection() {
  const openingTagText = `<>`;
  const closingTagText = `</>`;

  return (
    <section className={styles['section']} data-aos='fade-up' data-aos-once='true' data-aos-offset='500' id='about-me' data-aos-duration='2000' data-aos-easing='ease-in-out-cubic'>
      {/* Heading */}
      <h2 className={styles['section__heading']}>Hello. I am Bryan.</h2>
      {/* Section content */}
      <div className={styles['section__content']}>
        {/* portrait */}
        <div className={styles['section__content--portrait']}>
          <Image src={Portrait} layout='fill' alt='portrait' />
        </div>

        {/* Top paragraph */}
        <div className={styles['section__content--para']}>
          <p>I am an enthustiastic Web Developer that creates Websites using</p>
          <span>{openingTagText}</span> React, SCSS, NodeJS, NextJS, and MongoDB. <span>{closingTagText}</span>
        </div>

        {/* Bottom paragraph */}
        <div className={styles['section__content--para']}>
          <p>I currently attend Nassau Community College.</p>
          <p>I study</p>
          <span>{openingTagText}</span> Computer Science. <span>{closingTagText}</span>
        </div>

        {/* Button */}
        <a href='#projects'>
          <span>Let&apos;s look at my projects</span>
        </a>
      </div>
    </section>
  );
}

export default AboutMeSection;
