import styles from './AboutMeSection.module.scss';
import { useEffect, memo } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function AboutMeSection() {
  useEffect(() => {
    aos.init({ duration: 2000 });

    return () => aos.init({ duration: 0 });
  }, []);

  const openingTagText = `<>`;

  const closingTagText = `</>`;
  return (
    <section className={styles['about-me-section']} data-aos='slide-up' data-aos-once='true' data-aos-offset='150' id='about-me'>
      {/* Section content */}
      <div className={styles['about-me-section__content']}>
        {/* Heading */}
        <h2 className={styles['about-me-section__content--heading']}>Hello. I am Bryan.</h2>
        {/* portrait */}
        <div className={styles['about-me-section__content--portrait']}>
          <Image src='/imgs/bunny.png' layout='fill' alt='Bunny' />
        </div>

        {/* Top paragraph */}
        <div className={styles['about-me-section__content--para']}>
          <p>I am an enthustiastic Web Developer that creates Websites using</p>
          <span>{openingTagText}</span> React, SCSS, NodeJS, Java Spring, MongoDB. <span>{closingTagText}</span>
        </div>

        {/* Bottom paragraph */}
        <div className={styles['about-me-section__content--para']}>
          <p>I currently attend Nassau Community College.</p>
          <p>I study</p>
          <span>{openingTagText}</span> Computer Science. <span>{closingTagText}</span>
        </div>

        {/* Button */}
        <a href='#projects'>
          <span>Let's look at my projects</span>
        </a>
      </div>
    </section>
  );
}

export default memo(AboutMeSection);
