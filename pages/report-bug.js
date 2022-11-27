import styles from './report-bug.module.scss';
import Navbar from '../components/UI/Navbar';
import ReportBugForm from '../components/forms/ReportBugForm';

function ReportBugPage() {
  //Navbar links array
  const navLinks = [
    {
      name: 'Home',
      path: '/'
    }
  ];

  return (
    <section className={styles['section']}>
      {/* Navbar */}
      <Navbar links={navLinks} />
      {/* Heading */}
      <h1 className={styles['section__heading']}>{`< Report A Bug >`}</h1>
      {/* Form */}
      <ReportBugForm />
    </section>
  );
}

export default ReportBugPage;
