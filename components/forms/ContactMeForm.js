import styles from './ContactMeForm.module.scss';
import { useRef, useReducer } from 'react';
import useForm from '../hooks/use-form';
import LoadingSpinner from '../UI/LoadingSpinner';

//Validity checker function that checks if the input is empty
const isValidEmail = email => email.includes('@') && email.trim() !== '';

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

function ContactMeForm() {
  //Form ref
  const formRef = useRef();

  //Form state reducer
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  //Message custom hook
  const { input: emailInput, isInputInvalid: isEmailInvalid, handleInputChange: emailChangeHandler, handleInputBlur: emailBlurHandler, reset: emailReset } = useForm(isValidEmail);

  //Close response message button handler
  const closeMessageHandler = () => {
    dispatchFormState({ type: 'DISPLAY_FORM', boolean: true });
    dispatchFormState({ type: 'SUCCESS', boolean: false });
    dispatchFormState({ type: 'ERROR', boolean: false });
  };

  // Form submission handler
  const onSubmitHandler = event => {
    event.preventDefault();

    if (!isValidEmail(emailInput) || isEmailInvalid) {
      //If the email is invalid, do not send the form and highlights the email input with red border
      emailBlurHandler();
      return;
    } else {
      //send form data to API
      const { name, email, message } = formRef.current.elements;
      postData({ name: name.value, email: email.value, message: message.value });
      emailReset();
    }
  };

  // Post request to API
  const postData = async input => {
    dispatchFormState({ type: 'DISPLAY_FORM', boolean: false });
    dispatchFormState({ type: 'SENDING', boolean: true });

    // request sent to contact api file
    const response = await fetch('/api/contact', {
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
      case 200:
      case 201:
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
  const messageStateStyle = isEmailInvalid ? styles['form__input--invalid'] : styles['form__input'];

  //Variable to display the form or the response message
  const displayForm = formState.displayForm && (
    //FORM HTMLonSubmitHandler
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
      <div className={messageStateStyle}>
        <input type='email' id='email' placeholder='E-Mail Address *' value={emailInput} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        <label htmlFor='email'>E-Mail *</label>
        {isEmailInvalid && <p className={styles['form__input--error']}>Please, enter a valid e-mail address.</p>}
      </div>

      {/* textarea */}
      <div className={styles['form__input']}>
        <label htmlFor='message'>Please, Describe the bug.</label>
        <textarea type='text' id='message' rows='5' />
      </div>

      {/* Submit button */}
      <button className={styles['form__submit-btn']}>Submit</button>
    </>
  );

  //Switch statement for form side effects state
  let sideEffectState = null;

  switch (true) {
    case formState.isSending:
      // If message is sending
      sideEffectState = (
        <div className={styles['form__submission-msg--sending']}>
          <h2>Sending...</h2>
          <LoadingSpinner />
        </div>
      );
      break;
    // If message is sent successfully
    case formState.isSuccessful:
      sideEffectState = (
        <div className={styles['form__submission-msg--success']}>
          <h2>Success!</h2>
          <p>Thanks for contacting me :)</p>
          <i className='fa-solid fa-check'></i>
        </div>
      );
      break;
    // If message is not sent successfully
    case formState.isError:
      sideEffectState = (
        <div className={styles['form__submission-msg--error']}>
          <h2>Error!</h2>
          <p>There has been an error. Please, try again.</p>
          <i className='fa-solid fa-exclamation'></i>
        </div>
      );
      break;
    // If none of the above
    default:
      sideEffectState = (
        <div className={styles['form__submission-msg--error']}>
          <h2>Error!</h2>
          <p>There has been an error. Please, try again.</p>
          <i className='fa-solid fa-exclamation'></i>
        </div>
      );
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles['form']} ref={formRef}>
      {/* Display form or not */}
      {displayForm}

      {/* If form is not being displayed, display the side effect message with an ok button if message is not being sent */}
      {!formState.displayForm && (
        <div className={styles['form__submission-msg']}>
          {/* side effect state elements */}
          {sideEffectState}

          {/* If message is not being sent, display the ok button */}
          {!formState.isSending && <button onClick={closeMessageHandler}>OK</button>}
        </div>
      )}
    </form>
  );
}

export default ContactMeForm;
