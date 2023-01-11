import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import zh from './zh.json'

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: window.localStorage.getItem('i18currentLang') || 'en',
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: ['en', 'zh'],
})

export default i18n
