import { useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import MainPage from '../components/main-page/MainPage';

export default function Home() {
  const [isScrollShown, setIsScrollShown] = useState(false);

  const updatePosition = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 450) {
      setIsScrollShown(true);
    } else {
      setIsScrollShown(false);
    }
  }, []);

  // useMemo(() => {
  //   window.addEventListener('scroll', updatePosition);
  //   return () => window.removeEventListener('scroll', updatePosition);
  // }, [updatePosition]);

  return (
    <>
      <MainPage isScrollShown={isScrollShown} />
    </>
  );
}
