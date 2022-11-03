import styles from './ReportBugForm.module.scss';
import useForm from '../hooks/use-form';
import { useRef, useEffect, useReducer } from 'react';

//Validity checker function that checks if the input is empty
const isNotEmpty = name => name.trim() !== '';

//Form state reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_FORM':
      return { ...state, displayForm: !state.displayForm };
    case 'SENDING':
      return { ...state, isSending: !state.isSending };
    case 'SUCCESS':
      return { ...state, isSucessful: !state.isSucessful };
    case 'ERROR':
      return { ...state, isError: !state.isError };
    default:
      return state;
  }
};

function ReportBugForm() {
  //Form ref
  const formRef = useRef();

  //Form state reducer
  const [formState, dispatchFormState] = useReducer(formReducer, { displayForm: true, isSending: false, isSucessful: false, isError: false });

  //Message custom hook
  const { input: messageInput, isInputInvalid: isMessageInvalid, handleInputChange: messageChangeHandler, handleInputBlur: messageBlurHandler, reset: messageReset } = useForm(isNotEmpty);

  //Submit handler
  const onSubmitHandler = e => {
    e.preventDefault();

    if (messageInput.trim() === '' || isMessageInvalid) {
      messageBlurHandler();
      return;
    } else {
      messageReset();
      const { name, url, email, message } = formRef.current.elements;
      postData({ name: name.value, url: url.value, email: email.value, message: message.value });
    }
  };

  // Post request to API
  const postData = async input => {
    dispatchFormState({ type: 'DISPLAY_FORM' });
    dispatchFormState({ type: 'SENDING' });

    const response = await fetch('/api/reportBug', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatchFormState({ type: 'SENDING' });

    //Checks for response status
    const status = response.status;
    if (status === 201 || status === 200) {
      dispatchFormState({ type: 'SUCCESS' });
    } else if (status <= 422) {
      dispatchFormState({ type: 'ERROR' });
    }
  };

  // ternary operator to check if the form is valid
  const messageStateStyle = isMessageInvalid ? styles['form__input--invalid'] : styles['form__input'];

  //Display form
  const displayForm = formState.displayForm ? (
    //FORM HTML
    <>
      {/* name */}
      <div className={styles['form__input']}>
        <label htmlFor='name'>Name (Optional)</label>
        <input type='text' id='name' placeholder='Name (Optional)' />
      </div>

      {/* URL */}
      <div className={styles['form__input']}>
        <label htmlFor='URL'>URL (Optional)</label>
        <input type='text' id='url' />
      </div>

      {/* email */}
      <div className={styles['form__input']}>
        <label htmlFor='email'>E-Mail Address (Optional)</label>
        <input type='email' id='email' />
      </div>

      {/* textarea */}
      <div className={messageStateStyle}>
        <label htmlFor='message'>Please, Describe the bug.</label>
        <textarea type='text' id='message' value={messageInput} onChange={messageChangeHandler} onBlur={messageBlurHandler} rows='5' />
        {isMessageInvalid && <p className={styles['form__input--error']}>Please, enter a report.</p>}
      </div>

      {/* Submit button */}
      <button className={styles['form__submit-btn']}>Submit</button>
    </>
  ) : (
    //Display message based on current form side effect state
    sideEffectState
  );

  let sideEffectState = null;

  //Switch state for side effects form state
  switch (formState) {
    case formState.isSending:
      sideEffectState = <p>Sending...</p>;
      break;
    case formState.isSucessful:
      sideEffectState = <p>Thank you for your report!</p>;
      break;
    case formState.isError:
      sideEffectState = <p>Something went wrong. Please, try again later.</p>;
      break;
    default:
      sideEffectState = <p>Something went wrong. Please, try again later.</p>;
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles['form']} ref={formRef}>
      {displayForm}
    </form>
  );
}

export default ReportBugForm;
