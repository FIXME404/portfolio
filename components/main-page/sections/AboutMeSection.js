import styles from './AboutMeSection.module.scss';
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Portrait from '../../../public/imgs/portrait.png';

function AboutMeSection() {
  useEffect(() => {
    aos.init({ duration: 1500 });

    return () => aos.init({ duration: 0 });
  }, []);

  const openingTagText = `<>`;
  const closingTagText = `</>`;

  return (
    <section className={styles['section']} data-aos='slide-up' data-aos-once='true' data-aos-offset='150' id='about-me'>
      {/* Heading */}
      <h2 className={styles['section__heading']}>Hello. I am Bryan.</h2>
      {/* Section content */}
      <div className={styles['section__content']}>
        {/* portrait */}
        <div className={styles['section__content--portrait']}>
          <Image src={Portrait} layout='fill' alt='bunny' />
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
          <span>Let's look at my projects</span>
        </a>
      </div>
    </section>
  );
}

export default AboutMeSection;
