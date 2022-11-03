import styles from './ScrollToTop.module.scss';

function ScrollToTop() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  return (
    <div className={styles['scroll']}>
      <button className={styles['scroll__button']} onClick={scrollToTop}>
        <i className='fa-solid fa-angle-up'></i>
      </button>
    </div>
  );
}

export default ScrollToTop;
