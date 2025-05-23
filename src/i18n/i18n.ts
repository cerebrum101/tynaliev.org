import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { kg } from './translations/kg';
import { ru } from './translations/ru';
import { en } from './translations/en';
import { kz } from './translations/kz';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kg: { translation: kg },
      ru: { translation: ru },
      en: { translation: en },
      kz: { translation: kz }
    },
    lng: 'kg', // default language
    fallbackLng: 'kg',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 