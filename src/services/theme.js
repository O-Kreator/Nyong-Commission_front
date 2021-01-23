import {getLocalStorage, setLocalStorage} from '_services/localStorage.js';

export const getTheme = () => getLocalStorage('theme');

export const setTheme = (theme) => {
  setLocalStorage('theme', theme);

  if (theme === 'dark') {
    window.document.body.classList.add('theme_dark');
  } else {
    window.document.body.classList.remove('theme_dark');
  }
}

export const initTheme = () => { 
  const themeLocal = getTheme();
  const systemPreferDark = window.matchMedia('prefers-color-scheme: dark');

  const theme = themeLocal === 'dark' || systemPreferDark.matches ? 'dark' : 'light';
  setTheme(theme);
}

export const toggleTheme = () => {
  const toggledTheme = getLocalStorage('theme') === 'light' ? 'dark' : 'light';
  setTheme(toggledTheme);
}
