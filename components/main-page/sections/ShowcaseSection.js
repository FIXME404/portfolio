import styles from './ShowcaseSection.module.scss';
import Navbar from '../../../components/UI/Navbar';
import Image from 'next/image';
import Logo from '../../../public/imgs/logo.png';

function ShowcaseSection() {
  const welcomeText = '< Welcome >';

  //Navbar links array
  const navLinks = [
    { link: '#projects', name: 'Projects' },
    { link: '#about-me', name: 'About Me' },
    { link: '#contact-me', name: 'Contact Me' },
    { path: 'report-bug', name: 'Report Bug' }
  ];

  return (
    <section id='showcase' className={styles['showcase-section']}>
      {/* Navbar */}
      <Navbar links={navLinks} />

      {/* Headings */}
      <div className={styles['showcase-section__content']}>
        <h2>{welcomeText}</h2>
        <h1>I’m a React Web Developer.</h1>
        <h3>I make front-end Websites.</h3>

        {/* React logo */}
        <div className={styles['showcase-section__content--logo']}>
          <Image src={Logo} layout='fill' alt='logo' objectFit='cover' />
        </div>

        {/* Button */}
        <a href='#about-me'>Learn More</a>
      </div>
    </section>
  );
}

export default ShowcaseSection;
