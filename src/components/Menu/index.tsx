import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(e: React.MouseEvent) {
    e.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href='/'
        aria-label='ir para home'
        title='ir para home'
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='/history'
        aria-label='ir para ver historico'
        title='ver historico'
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='#'
        aria-label='Ir para configs'
        title='configs'
      >
        <SettingsIcon />
      </RouterLink>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='mudar tema'
        onClick={e => handleThemeChange(e)}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
