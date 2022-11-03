import styles from './report-bug.module.scss';
import Link from 'next/link';
import Navbar from '../components/UI/Navbar';
import InputField from '../components/inputs/InputField';
import InputArea from '../components/inputs/InputArea';
import ReportBugForm from '../components/forms/ReportBugForm';

function ReportBugPage() {
  const navLinks = [
    {
      name: 'Home',
      path: '/'
    }
  ];

  return (
    <div className={styles['section']}>
      {/* Navbar */}
      <Navbar links={navLinks} />

      {/* Heading */}
      <h1 className={styles['section__heading']}>{`< Report A Bug >`}</h1>
      <ReportBugForm />
    </div>
  );
}

export default ReportBugPage;

// <form className={styles['section__form']}>
// {/* Name */}
// <InputField type='text' name='name' label='Name(Optional)' />
// {/* Email */}
// <InputField type='email' name='email' label='Email(Optional)' />
// {/* URL */}
// <InputField type='text' name='URL' label='URL(Optional)' />
// {/* Bug Description field */}
// <InputArea name='Bug Description' />
// {/* Submit Button */}
// <button type='submit' className={styles['section__form--submit-btn']}>
//   Submit
// </button>
// </form>
