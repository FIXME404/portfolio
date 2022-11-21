import styles from './ContactSection.module.scss';
import { useEffect, memo, useRef, useState, useTimeout } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import ContactMeForm from '../../forms/ContactMeForm';

function ContactSection() {
  return (
    <section id='contact-me' className={styles['contact-section']} data-aos='fade' data-aos-once='true' data-aos-duration='20000' data-aos-delay='1000000'>
      {/* Heading */}
      <h2 className={styles['contact-section__heading']}>Let&apos;s get in touch.</h2>
      {/* Contact Form*/}
      <ContactMeForm />
      {/* Closing Tag */}
      <h2 className={styles['contact-section__closing-tag']}>{`</ Thanks for stopping by. >`}</h2>
    </section>
  );
}

export default memo(ContactSection);
