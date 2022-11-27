import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar(props) {
  //Variable to hold the theme
  let htmlTheme;

  //Waits for window to load before setting theme
  if (typeof window !== 'undefined') {
    let preferredTheme = document.documentElement.getAttribute('data-theme');
    //On first load, gets the user's preferred theme and sets the theme to it
    if (preferredTheme === null || preferredTheme === undefined)
      window.matchMedia('(prefers-color-scheme: dark)').matches ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');

    htmlTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? false : true;
  }

  //Stores HTML theme in useState
  const [themeState, changeThemeState] = useState(htmlTheme);

  //Theme toggler function
  const handleChangingTheme = () => {
    themeState ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    changeThemeState(themeState => !themeState);
  };

  //Hamburger menu state
  const [hamburgerState, changeHamburgerState] = useState('');

  //Hamburger toggler function
  const handleHamburgerOpen = () => changeHamburgerState(() => (hamburgerState === '' ? 'open' : ''));

  //Navbar links array mapping
  const linksArray = props.links.map((link, index) => {
    // If the link is a routing link
    if (link.path !== undefined && link.path !== null) {
      return (
        <li key={index} className={styles['header__nav--links__items']}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      );
    }
    // Else if the link is an anchor link
    return (
      <li key={index} className={styles['header__nav--links__items']}>
        <a href={link.link}>{link.name}</a>
      </li>
    );
  });

  return (
    // hamburgerState
    <header className={`${styles[hamburgerState]} ${styles['header']}`}>
      {/* Hamburger Lines */}
      <div className={styles['header__menu']} onClick={handleHamburgerOpen}>
        <div className={`${styles[hamburgerState]} ${styles['header__menu--line']}`} />
      </div>

      {/* Overlay */}
      <div className={`${styles[hamburgerState]} ${styles['header__overlay']}`} onClick={handleHamburgerOpen} />

      {/* Navbar */}
      <nav className={`${styles[hamburgerState]} ${styles['header__nav']}`}>
        {/* Logo */}
        <i className='fa-solid fa-code'></i>

        {/* Links */}
        <ul className={styles['header__nav--links']}>
          {linksArray}

          {/* Dark Mode Toggler */}
          <div className={styles['header__nav--links__toggle-container']}>
            <input type='checkbox' id='toggle' name='theme' onClick={handleChangingTheme} checked={themeState} readOnly={true} />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
