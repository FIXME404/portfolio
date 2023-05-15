import styles from './java-code-generator.module.scss';
import Navbar from '../../components/UI/Navbar';
import Image from 'next/image';
import javaCodeGenerator from '../../public/imgs/java_code_generator.png';

function JavaGeneratorPage() {
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
        <h1 className={styles['page-section__content--heading']}>{`< Java Code Generator >`}</h1>

        {/* Project's image */}
        <div className={styles['page-section__content--img']}>
          <Image src={javaCodeGenerator} layout='fill' alt='Java Code Generator Website' objectFit='fill' />
        </div>

        {/* Brief description of the project. */}
        <h2 className={styles['page-section__content--subheading']}>Java Code Generator is a web application that generates Java code with Javadoc and abstract methods of your choosing.</h2>

        {/* Project's hosted weblink */}
        <div className={styles['page-section__content--link-btn']}>
          <a className={styles['page-section__content--link-btn']} href='https://bryan-granda.github.io/java-code-generator/' target='_blank' rel='noreferrer'>
            https://bryan-granda.github.io/Java-code-generator/
          </a>
        </div>

        {/* Project's Purpose */}
        <p className={styles['page-section__content--purpose']}>
          <label>{`< Purpose >`}</label>
          The purpose of this project was to create a web application that allows users to quickly generate Java code. The app lets users rapidly generate a simple Java Class with instance variables,
          abstract methods, getters and setter methods, and Javadoc for all methods. The idea initially started with me wanting to create a web app that I can use to generate my Java classes quickly
          for school projects, but I decided others might be interested in using it and decided to make it share it with others.
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
          This web app uses React hooks such as, useState, useReducer, and useEffect. It uses optimization hooks such as, useCallback, useMemo, and lazy loading. It also uses React Router to navigate
          between pages. The global state manager at use is React Redux. The application is also responsive and works on all devices.
        </p>

        {/* Project creator */}
        <p>
          Developer:{' '}
          <a className={styles['page-section__content--web-link']} href='https://github.com/bryan-granda' target='_blank' rel='noreferrer'>
            Bryan Granda
          </a>
          .
        </p>

        {/* Project's codebase button */}
        <div className={styles['page-section__content--link-btn']}>
          <p>
            The codebase is located at
            <a href='https://github.com/bryan-granda/Java-code-generator' target='_blank' rel='noreferrer'>
              https://github.com/bryan-granda/Java-code-generator
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default JavaGeneratorPage;
