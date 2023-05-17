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

  // image styles
  const imageStyles = {
    objectFit: 'cover'
  };

  return (
    <section id='showcase' className={styles['showcase-section']}>
      {/* Navbar */}
      <Navbar links={navLinks} />

      {/* Headings */}
      <div className={styles['showcase-section__content']}>
        <h2 className={styles['showcase-section__content--welcome']}>{welcomeText}</h2>
        <h1 className={styles['showcase-section__content--title']}>
          I’m a <span>React</span> Web Developer.
        </h1>
        <h3 className={styles['showcase-section__content--subtitle']}>I make Full-stack Websites.</h3>

        {/* React logo */}
        <div className={styles['showcase-section__content--logo']}>
          <Image src={Logo} alt='logo' fill style={imageStyles} />
        </div>

        {/* Button */}
        <a href='#about-me'>Learn More</a>
      </div>
    </section>
  );
}

export default ShowcaseSection;
