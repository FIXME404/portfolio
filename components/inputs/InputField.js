import styles from './InputField.module.scss';

function InputField(props) {
  return (
    <div className={styles['text-field']}>
      <input type={props.type} id={props.name} placeholder={props.name} />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}

export default InputField;
