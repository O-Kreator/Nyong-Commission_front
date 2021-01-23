import {register, init, getLocaleFromNavigator, locale as $locale} from 'svelte-i18n';
import {getLocalStorage, setLocalStorage} from '_services/localStorage.js';

const initOptions = {
  fallbackLocale: 'en',
  initialLocale: null,
};

let currentLocale = null;

register('en', () => import('_locales/en.json'));
register('ko', () => import('_locales/ko.json'));

$locale.subscribe((value) => {
  if (value == null) return;

  currentLocale = value;

  if (typeof window !== 'undefined') {
    if (value === 'ko-KR') {
      setLocalStorage('locale', 'ko');
    } else if (value === 'en-US') {
      setLocalStorage('locale', 'en');
    } else {
      setLocalStorage('locale', value);
    }
  }
});

// Initializing the i18n library in client.
export function startClient() {
  init({
    ...initOptions,
    initialLocale: getLocalStorage('locale') || getLocaleFromNavigator(),
  });
}

// Initializing the i18n library in server and returns its middleware.
const REGEX_DOCUMENT = /(^([^.?#@]+)?([?#](.+)?)?|service-worker.*?\.html)$/;

export function i18nMiddleware() {
  init(initOptions);

  return (req, res, next) => {
    const isDocument = REGEX_DOCUMENT.test(req.originalUrl);

    if (!isDocument) {
      next();
      return;
    }

    let locale = getLocalStorage('locale');

    if (typeof locale === 'undefined') {
      if (req.headers['accept-language']) {
        const headerLang = req.headers['accept-language'].split(',')[0].trim();
        if (headerLang.length > 1) {
          locale = headerLang;
        }
      } else {
        locale = initOptions.initialLocale || initOptions.fallbackLocale;
      }
    }

    if (locale != null && locale !== currentLocale) {
      $locale.set(locale);
    }

    next();
  };
}
