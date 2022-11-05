import styles from './ReportBugForm.module.scss';
import useForm from '../hooks/use-form';
import { useRef, useReducer } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

//Validity checker function that checks if the input is empty
const isEmpty = name => name.trim() !== '';

//reducer initial state
const initialState = {
  displayForm: true,
  isSending: false,
  isSuccessful: false,
  isError: false
};

//Form state reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_FORM':
      return { ...state, displayForm: action.boolean };
    case 'SENDING':
      return { ...state, isSending: action.boolean };
    case 'SUCCESS':
      return { ...state, isSuccessful: action.boolean };
    case 'ERROR':
      return { ...state, isError: action.boolean };
    default:
      return state;
  }
};

function ReportBugForm() {
  //Form ref
  const formRef = useRef();

  //Form state reducer
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  //Message custom hook
  const { input: messageInput, isInputInvalid: isMessageInvalid, handleInputChange: messageChangeHandler, handleInputBlur: messageBlurHandler, reset: messageReset } = useForm(isEmpty);

  //close message button
  const closeMessageHandler = () => {
    dispatchFormState({ type: 'DISPLAY_FORM', boolean: true });
    dispatchFormState({ type: 'SUCCESS', boolean: false });
    dispatchFormState({ type: 'ERROR', boolean: false });
    messageReset();
  };

  //Submit handler
  const onSubmitHandler = e => {
    e.preventDefault();

    if (!isEmpty(messageInput) || isMessageInvalid) {
      messageBlurHandler();
      return;
    } else {
      const { name, url, email, message } = formRef.current.elements;
      postData({ name: name.value, url: url.value, email: email.value, message: message.value });
      messageReset();
    }
  };

  // Post request to API
  const postData = async input => {
    dispatchFormState({ type: 'DISPLAY_FORM', boolean: false });
    dispatchFormState({ type: 'SENDING', boolean: true });

    const response = await fetch(process.env.NEXT_PUBLIC_SRC_R, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatchFormState({ type: 'SENDING', boolean: false });

    //Checks for response status
    const status = response.status;
    switch (status) {
      case 200 || 201:
        dispatchFormState({ type: 'SUCCESS', boolean: true });
        break;
      case status > 400:
        dispatchFormState({ type: 'ERROR', boolean: true });
        break;
      default:
        dispatchFormState({ type: 'ERROR', boolean: true });
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
        <input type='text' id='name' placeholder='Name (Optional)' />
        <label htmlFor='name'>Name (Optional)</label>
      </div>

      {/* URL */}
      <div className={styles['form__input']}>
        <input type='text' id='url' placeholder='URL (Optional)' />
        <label htmlFor='URL'>URL (Optional)</label>
      </div>

      {/* email */}
      <div className={styles['form__input']}>
        <input type='email' id='email' placeholder='E-Mail Address (Optional)' />
        <label htmlFor='email'>E-Mail Address (Optional)</label>
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

  //Switch state for side effects form state
  let sideEffectState = null;
  switch (true) {
    case formState.isSending:
      sideEffectState = (
        <div className={styles['form__submission-msg--sending']}>
          <h2>Sending...</h2>
          <LoadingSpinner />
        </div>
      );
      break;
    case formState.isSuccessful:
      sideEffectState = (
        <div className={styles['form__submission-msg--success']}>
          <h2>Success!</h2>
          <p>Thank you for your report!</p>
          <i className='fa-solid fa-check'></i>
        </div>
      );
      break;
    case formState.isError:
      sideEffectState = (
        <div className={styles['form__submission-msg--error']}>
          <h2>Error!</h2>
          <p>There has been an error. Please, try again.</p>
          <i className='fa-solid fa-exclamation'></i>
        </div>
      );
      break;
    default:
      <div className={styles['form__submission-msg--error']}>
        <h2>Error!</h2>
        <p>There has been an error. Please, try again.</p>
        <i className='fa-solid fa-exclamation'></i>
      </div>;
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles['form']} ref={formRef}>
      {displayForm}
      {!formState.displayForm && (
        <div className={styles['form__submission-msg']}>
          {sideEffectState} {!formState.isSending && <button onClick={closeMessageHandler}>OK</button>}
        </div>
      )}
    </form>
  );
}

export default ReportBugForm;
