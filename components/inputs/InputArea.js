import styles from './InputArea.module.scss';

function InputArea(props) {
  return (
    <div className={styles['text-area']}>
      <textarea id={props.name} placeholder={props.label} rows='5' />
    </div>
  );
}

export default InputArea;
