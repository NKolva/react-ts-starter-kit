import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, ua } from './locales';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: en,
    ua: ua,
  },
  debug: true,
  keySeparator: '.',
});

export default i18n;
