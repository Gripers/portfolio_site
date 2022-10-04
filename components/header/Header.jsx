import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <small>Welcome to my portfolio website!</small>
      <h1>
        Hi, I&apos;m{' '}
        <span style={{ color: '#ffc200' }}>Frontend Developer</span>
      </h1>
      <div className={styles.buttons}>
        <button className={styles.resume}>Download Resume</button>
        <button className={styles.quote}>Get a free quote</button>
      </div>
    </div>
  );
};

export default Header;
