import styles from './MainPage.module.scss';
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import ShowcaseSection from './sections/ShowcaseSection';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function MainPage() {
  //AOS animation
  useEffect(() => {
    aos.init();
    return () => aos.init({ duration: 0 });
  }, []);

  return (
    <div className={styles.main}>
      <ShowcaseSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default MainPage;
