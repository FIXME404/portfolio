import styles from './ProjectsSection.module.scss';
import { useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aos from 'aos';
import 'aos/dist/aos.css';

function ProjectsSection() {
  useEffect(() => {
    aos.init({ duration: 2000 });

    return () => aos.init({ duration: 0 });
  }, []);

  return (
    <section id='projects' className={styles['projects-section']} data-aos='fade-right' data-aos-once='true'>
      {/* Section content */}
      <div className={styles['projects-section__content']}>
        {/* Heading */}
        <h2 className={styles['projects-section__content--heading']}>Have a look at my creations.</h2>

        {/* ********* Project 1 *********/}
        <div className={styles['projects-section__content--project']}>
          {/* ^^^^^^^ Left Side ^^^^^^^ */}
          <div className={styles['projects-section__content--project__img']}>
            {/* Heading */}
            <h3 className={styles['projects-section__content--project__img--title']}>Java Code Generator</h3>
            {/* Project image */}
            <Image src='/imgs/java_code_generator.png' width='111' height='111' alt='Java Code Generator' />
          </div>

          {/* ^^^^^^^ Right Side ^^^^^^^*/}
          <div className={styles['projects-section__content--project__info']}>
            {/* Description */}
            <p className={styles['projects-section__content--project__info--para']}>
              An interactive and easy-to-use website that generates Java code. Quickly generates your Java Class with abstract methods and Javadoc.
            </p>
            {/* button */}
            <Link href='/java-code-generator'>View Project</Link>
          </div>
        </div>

        <a href='#testimonials' className={styles['projects-section__content--button']}>
          See what others say
        </a>
      </div>
    </section>
  );
}

export default memo(ProjectsSection);
