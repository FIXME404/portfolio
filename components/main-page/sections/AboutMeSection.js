import styles from './AboutMeSection.module.scss';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Portrait from '../../../public/imgs/portrait.png';

function AboutMeSection() {
  const openingTagText = `<>`;
  const closingTagText = `</>`;

  // image styles
  const imageStyles = {
    objectFit: 'contain'
  };

  return (
    <section className={styles['section']} data-aos='fade-up' data-aos-once='true' data-aos-offset='50' id='about-me' data-aos-duration='2000' data-aos-easing='ease-in-out-cubic'>
      {/* Heading */}
      <h2 className={styles['section__heading']}>
        Hello. I am <span>Bryan</span>.
      </h2>
      {/* Section content */}
      <div className={styles['section__content']}>
        {/* portrait */}
        <div className={styles['section__content--portrait']}>
          <Image src={Portrait} fill alt='portrait' style={imageStyles} />
        </div>

        {/* Top paragraph */}
        <div className={styles['section__content--para']}>
          <p>
            Based in New York, <br></br> I build websites with
          </p>
          <span>{openingTagText}</span> React, SCSS, NodeJS, NextJS, and MongoDB. <span>{closingTagText}</span>
        </div>

        {/* Bottom paragraph */}
        <div className={styles['section__content--para']}>
          <p>
            At Columbia University, <br></br> I study
          </p>
          <span>{openingTagText}</span> Computer Science. <span>{closingTagText}</span>
        </div>

        {/* Button */}
        <a href='#projects' className={styles['section__content--button']}>
          Let&apos;s look at my projects
        </a>
      </div>
    </section>
  );
}

export default AboutMeSection;
