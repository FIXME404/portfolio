import styles from './SkillsSection.module.scss';
import { useEffect, memo } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';

function SkillsSection() {
  useEffect(() => {
    aos.init({ duration: 2000 });

    return () => aos.init({ duration: 0 });
  }, []);

  return (
    <section id='skills' className={styles['skills-section']} data-aos='slide-up' data-aos-once='true'>
      {/* Heading */}
      <h2 className={styles['skills-section__heading']}>The languages I speak.</h2>
      {/* Section content */}

      <div className={styles['skills-section__skills']}>
        {/* Skill 1 */}
        <div className={styles['skills-section__skills--skill']}>
          {/* Name */}
          <h3 className={styles['skills-section__skills--skill__name']}>HTML</h3>
          {/* Info */}
          <div className={styles['skills-section__skills--skill__bar']}></div>
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
