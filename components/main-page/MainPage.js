import styles from './MainPage.module.scss';
import { useEffect, useState, useCallback, useMemo } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from '../UI/ScrollToTop';
import ShowcaseSection from './sections/ShowcaseSection';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function MainPage() {
  const [isScrollShown, setIsScrollShown] = useState(false);

  // This function is used to update the position of the scroll to top button
  const updatePosition = useCallback(() => (window.innerHeight - 150 < window.scrollY ? setIsScrollShown(true) : setIsScrollShown(false)), []);

  //AOS animation and scroll to top event listener
  useEffect(() => {
    aos.init();
    window.addEventListener('scroll', updatePosition);

    return () => {
      aos.init({ duration: 0 });
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <div className={styles.main}>
      <ShowcaseSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      {isScrollShown && <ScrollToTop />}
    </div>
  );
}

export default MainPage;
