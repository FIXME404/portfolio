import styles from './SkillsSection.module.scss';
import 'aos/dist/aos.css';

function SkillsSection() {
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

export default SkillsSection;
