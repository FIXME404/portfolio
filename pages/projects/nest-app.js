import styles from './java-code-generator.module.scss';
import Navbar from '../../components/UI/Navbar';
import Image from 'next/image';
import nestWebsite from '../../public/imgs/nest_website.png';

function NestAppPage() {
  //Navbar links array
  const NavLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Report Bug',
      path: '/report-bug'
    }
  ];

  return (
    <section className={styles['page-section']}>
      {/* Navbar */}
      <Navbar links={NavLinks} />

      <div className={styles['page-section__content']}>
        {/* Project's name */}
        <h1 className={styles['page-section__content--heading']}>{`< NCC Nest App Open Source Contribution >`}</h1>

        {/* Project's image */}
        <div className={styles['page-section__content--img']}>
          <Image src={nestWebsite} fill alt='NCC Nest Website' />
        </div>

        {/* Brief description of the project. */}
        <h2 className={styles['page-section__content--subheading']}></h2>

        {/* Project's hosted weblink */}
        <div className={styles['page-section__content--link-btn']}>
          <a className={styles['page-section__content--link-btn']} href='https://nestncc.weebly.com/' target='_blank' rel='noreferrer'>
            NCC Nest Website
          </a>
        </div>

        {/* Project's Purpose */}
        <p className={styles['page-section__content--purpose']}>
          <label>{`< Purpose >`}</label>
        </p>

        {/* Project's languages */}
        <p>
          Developed using{' '}
          <a className={styles['page-section__content--web-link']} href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            React
          </a>{' '}
          &{' '}
          <a className={styles['page-section__content--web-link']} href='https://sass-lang.com/' target='_blank' rel='noreferrer'>
            SCSS
          </a>
          .
        </p>

        {/* Project's features */}
        <p>
          <label>{`< Structure >`}</label>
        </p>

        {/* Project's codebase button */}
        <div className={styles['page-section__content--link-btn']}>
          <a href='https://gitlab.com/LibreFoodPantry/client-solutions/nest/NEST' target='_blank' rel='noreferrer'>
            Github Codebase Link
          </a>
        </div>
      </div>
    </section>
  );
}

export default NestAppPage;
