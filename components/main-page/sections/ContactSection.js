import styles from './ContactSection.module.scss';
import { useEffect, memo, useRef, useState, useTimeout } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import InputField from '../../../components/inputs/InputField';
import InputArea from '../../../components/inputs/InputArea';
import ContactMeForm from '../../forms/ContactMeForm';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';

function ContactSection() {
  const [displayForm, setDisplayForm] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [isSucessful, setIsSucessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const formRef = useRef();

  // Animation on scroll
  useEffect(() => {
    aos.init({ duration: 2000 });

    return () => aos.init({ duration: 0 });
  }, []);

  // Form submission
  const handleOnSubmit = event => {
    event.preventDefault();

    const isEmailValid = formRef.current.email.value.trim() !== '' && formRef.current.email.value.includes('@');

    //Form data and API endpoint
    if (isEmailValid) {
      //send form data to API
      const { name, email, message } = formRef.current.elements;
      postData({ name: name.value, email: email.value, message: message.value });
    } else {
      setIsInputValid(false);
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

    setIsSending(() => false);

    //Checks for response status
    const status = response.status;
    if (status === 201 || status === 200) setIsSucessful(() => true);
    else if (status <= 422) setIsError(() => true);

    setTimeout(() => {
      setDisplayForm(() => true);
      setIsSucessful(() => false);
      setIsError(() => false);
    }, 5000);
  };

  const isEmailValid = isInputValid ? '' : styles['contact-section__form--invalid'];

  // Form's HTML
  const formHTML = (
    <>
      {/* Name */}
      <InputField type='text' name='name' label={'Name'} />
      {/* Email */}
      <div>
        <InputField type='email' name='email' label={'Email *'} />
        {isInputValid ? '' : <span className={styles['contact-section__form--invalid-email']}>Please enter a valid email address.</span>}
      </div>
      {/* Message */}
      <InputArea name='message' label={'Message'} />
      {/* Submit Button */}
      <button type='submit' className={styles['contact-section__form--submit']}>
        Submit
      </button>
    </>
  );

  let formState;

  if (displayForm) {
    formState = formHTML;
  } else if (isSending) {
    formState = <LoadingSpinner />;
  } else if (isSucessful) {
    formState = (
      <div className={styles['contact-section__form--success']}>
        <i class='fa-solid fa-check'></i>
        <span>Message Successfully sent!</span>
        <span>We will stay in touch.</span>
      </div>
    );
  } else if (isError) {
    formState = (
      <div className={styles['contact-section__form--error']}>
        <i class='fa-solid fa-exclamation'></i>
        <span>Sorry. an error ocurred.</span>
      </div>
    );
  }

  return (
    <section id='contact-me' className={styles['contact-section']} data-aos='slide-left' data-aos-once='true'>
      {/* Heading */}
      <h2 className={styles['contact-section__heading']}>Let's get in touch.</h2>
      {/* Contact Form*/}
      <ContactMeForm />
      {/* Closing Tag */}
      <h2 className={styles['contact-section__closing-tag']}>{`</ Thanks for stopping by. >`}</h2>
    </section>
  );
}

export default memo(ContactSection);

// <form className={`${styles['contact-section__form']} ${isEmailValid}`} onSubmit={handleOnSubmit} ref={formRef}>
//         {formState}
//       </form>
