import React from 'react';
import styles from './Navbar.module.scss';

import { useTheme } from 'next-themes';
import Image from 'next/image';

import sun_icon from '../../assets/img/sun.png';
import moon_icon from '../../assets/img/moon.png';

const Navbar = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const themeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return <Image src={sun_icon} alt='' onClick={() => setTheme('light')} />;
    } else {
      return <Image src={moon_icon} alt='' onClick={() => setTheme('dark')} />;
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a>Portfolio</a>
      </div>
      <div className={styles.navigation}>
        <a>
          <span data-hover='Projects'>Projects</span>
        </a>
        <a>
          <span data-hover='Contacts'>Contacts</span>
        </a>
      </div>
      <div className={styles.mode}>{themeChanger()}</div>
    </div>
  );
};

export default Navbar;
