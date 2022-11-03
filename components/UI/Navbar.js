import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar(props) {
  let htmlTheme;
  useEffect(() => {
    htmlTheme = document.documentElement.getAttribute('data-theme');
  }, []);

  const [themeState, changeThemeState] = useState(htmlTheme === 'dark' ? true : false);

  if (typeof window !== 'undefined') {
    //useMemo to memorize the preferred theme of the user
    useMemo(() => {
      window.matchMedia('(prefers-color-scheme: dark)').matches ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    }, []);
  }

  const [hamburgerState, changeHamburgerState] = useState('');

  //Theme toggler function
  const handleChangingTheme = useCallback(() => {
    themeState ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    return changeThemeState(state => !state);
  }, [themeState]);

  //Hamburger toggler function
  const handleHamburgerOpen = () => {
    changeHamburgerState(() => {
      if (hamburgerState === '') {
        return 'open';
      } else {
        return '';
      }
    });
  };

  //Navbar links array
  const linksArray = props.links.map((link, index) => {
    if (link.path !== undefined && link.path !== null) {
      return (
        <li key={index} className={styles['header__nav--links__items']}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      );
    } else {
      return (
        <li key={index} className={styles['header__nav--links__items']}>
          <a href={link.link}>{link.name}</a>
        </li>
      );
    }
  });

  return (
    // hamburgerState
    <header className={`${styles[hamburgerState]} ${styles['header']}`}>
      {/* Hamburger Lines */}
      <div className={styles['header__menu']} onClick={() => handleHamburgerOpen()}>
        <div className={`${styles[hamburgerState]} ${styles['header__menu--line']}`} />
      </div>

      {/* Overlay */}
      <div className={`${styles[hamburgerState]} ${styles['header__overlay']}`} onClick={() => handleHamburgerOpen()} />

      {/* Navbar */}
      <nav className={`${styles[hamburgerState]} ${styles['header__nav']}`}>
        {/* Logo */}
        <i className='fa-solid fa-code'></i>

        {/* Links */}
        <ul className={styles['header__nav--links']}>
          {linksArray}
          {/* Dark Mode Toggler */}
          <div className={styles['header__nav--links__toggle-container']}>
            <input type='checkbox' id='toggle' name='theme' value={themeState} checked={themeState} onChange={() => handleChangingTheme()} />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
