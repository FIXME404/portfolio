import styles from './PopupMessage.module.scss';

function PopupMessage({ message, type }) {
  return (
    <div className={styles['popup']}>
      <span className={styles['popup__message']}>{message}</span>
    </div>
  );
}

export default PopupMessage;
