import styles from './ProjectsSection.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aos from 'aos';
import 'aos/dist/aos.css';

function ProjectsSection() {
  // useEffect(() => {
  //   aos.init({ duration: 2000 });

  //   return () => aos.init({ duration: 0 });
  // }, []);

  return (
    <section id='projects' className={styles['section']}>
      {/* Section heading */}
      <h2 className={styles['section__heading']}>Have a look at my creations.</h2>

      {/* Section content */}
      <div className={styles['section__projects']}>
        {/* ********* Project 1 *********/}
        <div className={styles['section__projects--project']} data-aos='fade-right' data-aos-once='true' data-aos-duration='2000'>
          {/* ^^^^^^^ Left Side ^^^^^^^ */}
          {/* Project's name */}
          <h3 className={styles['section__projects--project__name']}>Java Code Generator</h3>
          {/* Project image */}
          <div className={styles['section__projects--project__img']}>
            <Image src='/imgs/java_code_generator.png' layout='fill' alt='Java Code Generator' />
          </div>

          {/* ^^^^^^^ Right Side ^^^^^^^*/}
          <div className={styles['section__projects--project__info']}>
            {/* Description */}
            <p className={styles['section__projects--project__info--para']}>
              An interactive and easy-to-use website that generates Java code. Quickly generates your Java Class with abstract methods and Javadoc.
            </p>
            {/* button */}
            <Link href='/projects/java-code-generator'>View Project</Link>
          </div>
        </div>

        {/* To testimonials button */}
        <a href='#testimonials' className={styles['section__projects--button']}>
          Should we connect?
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;
