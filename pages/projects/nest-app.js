import styles from './nest-app.module.scss';
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

  // image styles
  const imageStyles = {
    objectFit: 'cover'
  };

  return (
    <section className={styles['page-section']}>
      {/* Navbar */}
      <Navbar links={NavLinks} />

      <div className={styles['page-section__content']}>
        {/* ********************  Project's name ********************  */}
        <h1 className={styles['page-section__content--heading']}>{`< NCC Nest App Contribution >`}</h1>

        {/* ********************  Project's image ********************  */}
        <div className={styles['page-section__content--img']}>
          <Image src={nestWebsite} fill alt='NCC Nest Website' style={imageStyles} />
        </div>

        {/* ******************* Project's hosted weblink ******************* */}
        <a className={styles['page-section__content--link-btn']} href='https://nestncc.weebly.com/' target='_blank' rel='noreferrer'>
          NCC Nest Official Website
        </a>

        {/* ******************* Project's codebase button ******************* */}
        <a href='https://gitlab.com/LibreFoodPantry/client-solutions/nest/NEST' className={styles['page-section__content--link-btn']} target='_blank' rel='noreferrer'>
          GitLab Codebase Link
        </a>

        {/* *******************  Project's Purpose ******************* */}
        <label>{`< Purpose >`}</label>

        <ul className={styles['page-section__content--list']}>
          {/* Item 1 */}
          <li className={styles['page-section__content--list__item']}>
            <span>
              Nassau Community College offers a food pantry service to assist those in need. The Compute Science Department at NCC has developed a mobile app to aid the food pantry helpers. The app
              enables helpers to manage expired items, keep track of the number of items available on the shelves, and record the arrival of guests.
            </span>
          </li>

          {/* Item 2 */}
          <li className={styles['page-section__content--list__item']}>
            <span>
              In my Mobile App Development class, we learned how to construct apps using Java and Android Studio IDE. We also learned to work with an open-source project using GitLab and Git. This
              Project was to contribute to the Nassau Community College's Food Pantry app, NCC NEST. My team in the class was tasked with connecting the app to the college's remote database.
            </span>
          </li>
        </ul>

        {/* ******************* Project's languages ******************* */}
        <p className={styles['page-section__content--languages']}>
          Developed using{' '}
          <a className={styles['page-section__content--web-link']} href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            Java
          </a>{' '}
          &&{' '}
          <a className={styles['page-section__content--web-link']} href='https://developer.android.com/' target='_blank' rel='noreferrer'>
            Android Studio
          </a>
          .
        </p>

        {/* ******************* Issues I worked with List ******************* */}
        <label>{`< Issues I worked on >`}</label>

        <ul className={styles['page-section__content--list']}>
          {/* Item 1 */}
          <li className={styles['page-section__content--list__item']}>
            <span>
              Our team was responsible for linking the NEST app to a remote database. Through our research and implementation of JDBC, we established connectivity. Our efforts successfully enabled the
              guest registration form to upload the entered information to the database.
            </span>
            <a href='https://gitlab.com/LibreFoodPantry/client-solutions/nest/NEST/-/issues/328' target='_blank' rel='noreferrer'>
              Link Here
            </a>
          </li>

          {/* Item 2 */}
          <li className={styles['page-section__content--list__item']}>
            <span>
              I proposed a secure method to handle secret keys when working on the project. This way, the project can compile without the risk of the secret keys being pushed to the GitLab repository
              and exposed to the public.
            </span>
            <a href='https://gitlab.com/LibreFoodPantry/client-solutions/nest/NEST/-/issues/348' target='_blank' rel='noreferrer'>
              Link Here
            </a>
          </li>

          {/* Item 3 */}
          <li className={styles['page-section__content--list__item']}>
            <span>
              I reseached and implemented updates to the deprecated AsyncTask class. I implemented the Executor to handle asynchoronous tasks in the background to replace the AsyncTask class.
            </span>
            <a href='https://gitlab.com/LibreFoodPantry/client-solutions/nest/NEST/-/issues/349' target='_blank' rel='noreferrer'>
              Link Here
            </a>
          </li>
        </ul>

        {/* ******************* Merge Requests List ******************* */}
        <label>{`< Merge requests >`}</label>

        <ul className={styles['page-section__content--list']}>
          {/* Item 1 */}
          <li className={styles['page-section__content--list__item']}>
            <span>
              The code written by our team that connects the NEST app to the remote database was merged. My contribution was writing Executor methods to query asynchronously to the remote database. I
              also modified the gradle.properties file to create a credentials.properties file so the app can compile when pulled from the GitLab directory.
            </span>
            <a href='https://gitlab.com/LibreFoodPantry/client-solutions/nest/NEST/-/merge_requests/366' target='_blank' rel='noreferrer'>
              Link Here
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NestAppPage;
