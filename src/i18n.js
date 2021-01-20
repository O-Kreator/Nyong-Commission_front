import {register, init, getLocaleFromNavigator, locale as $locale} from 'svelte-i18n';

const initOptions = {
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
};

let currentLocale = null;

register('en', () => import('_locales/en.json'));
register('ko-KR', () => import('_locales/ko.json'));

$locale.subscribe((value) => {
  if (value == null) return;

  currentLocale = value;
});

// Initializing the i18n library in client.
export function startClient() {
  init(initOptions);
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

    const locale = initOptions.initialLocale || initOptions.fallbackLocale;
    if (locale != null && locale !== currentLocale) {
      $locale.set(locale);
    }

    next();
  };
}
