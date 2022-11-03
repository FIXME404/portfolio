import styles from './Page404.module.scss';
import Navbar from '../components/UI/Navbar';

function Page404() {
  const navbarLinks = [
    { path: '/', name: 'Home' },
    { path: '/report-bug', name: 'Report Bug' }
  ];

  return (
    <section className={styles['section']}>
      <Navbar links={navbarLinks} />
      <div className={styles['section__content']}>
        <h1>{`< 404 >`}</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking was not found.</p>
        <i className='fa-solid fa-code'></i>
      </div>
    </section>
  );
}

export default Page404;
