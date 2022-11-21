import styles from './MainPage.module.scss';
import { useEffect } from 'react';
import ShowcaseSection from './sections/ShowcaseSection';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import aos from 'aos';
import 'aos/dist/aos.css';

function MainPage() {
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
