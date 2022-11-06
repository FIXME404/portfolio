import styles from './MainPage.module.scss';
import ShowcaseSection from './sections/ShowcaseSection';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function MainPage() {
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
