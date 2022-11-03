import styles from './ReportBugForm.module.scss';
import useForm from '../hooks/use-form';
import { useRef, useEffect } from 'react';

//Validity checker function that checks if the input is empty
const isNotEmpty = name => name.trim() !== '';

function ReportBugForm() {
  //Form ref
  const formRef = useRef();
  //Message custom hook
  const { input: messageInput, isInputInvalid: isMessageInvalid, handleInputChange: messageChangeHandler, handleInputBlur: messageBlurHandler, reset: messageReset } = useForm(isNotEmpty);

  let formIsValid = false;

  //If the message is not invalid then the form is valid
  if (!isMessageInvalid) formIsValid = true;

  const onSubmitHandler = e => {
    e.preventDefault();

    if (messageInput.trim() === '') {
      messageBlurHandler();
      return;
    } else if (isMessageInvalid) {
      messageBlurHandler();
      return;
    } else {
      messageReset();
      const { name, url, email, message } = formRef.current.elements;
    }
  };

  // Post request to API
  const postData = async input => {
    setDisplayForm(() => false);
    setIsSending(() => true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const messageStateStyle = isMessageInvalid ? styles['form__input--invalid'] : styles['form__input'];

  return (
    <form onSubmit={onSubmitHandler} className={styles['form']} ref={formRef}>
      {/* name */}
      <div className={styles['form__input']}>
        <label htmlFor='name'>Name (Optional)</label>
        <input type='text' id='name' placeholder='Name (Optional)' />
      </div>

      {/* URL */}
      <div className={styles['form__input']}>
        <label htmlFor='name'>Last Name</label>
        <input type='text' id='name' />
      </div>

      {/* email */}
      <div className={styles['form__input']}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>

      {/* textarea */}
      <div className={messageStateStyle}>
        <label htmlFor='name'>Please, Describe the bug.</label>
        <textarea type='text' id='name' value={messageInput} onChange={messageChangeHandler} onBlur={messageBlurHandler} />
        {isMessageInvalid && <p className={styles['form__input--error']}>Please, enter a report.</p>}
      </div>

      {/* Submit button */}
      <button className={styles['form__submit-btn']}>Submit</button>
    </form>
  );
}

export default ReportBugForm;
