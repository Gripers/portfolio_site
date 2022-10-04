import styles from '../styles/Home.module.scss';

import Head from 'next/head';

import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Projects from '../components/projects-section/Projects';
import Contact from '../components/contact-with-me-section/Contact';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='../public/favicon.ico' />
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Portfolio</title>
      </Head>

      <Navbar />
      <Header />
      {/*<Projects />*/}
      <Contact />
    </div>
  );
};

export default Home;
