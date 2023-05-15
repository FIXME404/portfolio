import styles from './ProjectsSection.module.scss';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';
import javaCodeGeneratorImg from '../../../public/imgs/java_code_generator.png';
import nestAppImg from '../../../public/imgs/nest_app.png';

function ProjectsSection() {
  return (
    <section id='projects' className={styles['section']}>
      {/* Section heading */}
      <h2 className={styles['section__heading']}>Have a look at my creations.</h2>

      {/* Section content */}
      <div className={styles['section__projects']}>
        {/* *************************** Project 1 ************************** */}
        <div className={styles['section__projects--project']} data-aos='fade-right' data-aos-once='true' data-aos-duration='2000'>
          {/* Project's name */}
          <h3 className={styles['section__projects--project__name']}>Java Code Generator</h3>

          {/* ^^^^^^^ Left side Project image ^^^^^^^ */}
          <div className={styles['section__projects--project__img']}>
            <Image src={javaCodeGeneratorImg} alt='Java Code Generator' layout='fill' objectFit='contain' />
          </div>

          {/* ^^^^^^^ Right Side ^^^^^^^ */}
          <div className={styles['section__projects--project__info']}>
            {/* Description */}
            <p className={styles['section__projects--project__info--para']}>
              An interactive and easy-to-use website that generates Java code. Quickly generates your Java Class with abstract methods and Javadoc.
            </p>
            {/* button */}
            <Link href='/projects/java-code-generator'>View Project</Link>
          </div>
        </div>

        {/* *************************** Project 2 ************************** */}
        <div className={styles['section__projects--project']} data-aos='fade-left' data-aos-once='true' data-aos-duration='2000'>
          {/* Project's name */}
          <h3 className={styles['section__projects--project__name']}>NCC Nest Mobile App Contribution</h3>

          {/* ^^^^^^^ Left Side ^^^^^^^ */}
          <div className={styles['section__projects--project__info']}>
            {/* Description */}
            <p className={styles['section__projects--project__info--para']}>
              Nassau Community College Mobile App development course final project was to contribute to the NCC Nest food pantry mobile app. This app will be used to facilitate operations at the NCC
              food pantry. This project is an open source project and is currently being developed by students at NCC.
            </p>
            {/* button */}
            <Link href='/projects/nest-app'>View Project</Link>
          </div>

          {/* ^^^^^^^ Right side Project image ^^^^^^^ */}
          <div className={styles['section__projects--project__img']}>
            <Image src={nestAppImg} alt='NCC Nest app' layout='fill' objectFit='contain' />
          </div>
        </div>

        {/* To contact-me button */}
        <a href='#contact-me' className={styles['section__projects--button']}>
          Should we connect?
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;
