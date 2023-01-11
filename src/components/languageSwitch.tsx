import { useTranslation } from 'react-i18next'

export function LanguageSwitch() {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    if (Array.isArray(i18n.options.supportedLngs)) {
      const allLangs = i18n.options.supportedLngs.filter((i) => i !== 'cimode')
      const currentLang = i18n.language
      const nextLang =
        allLangs[(allLangs.indexOf(currentLang) + 1) % allLangs.length]
      i18n.changeLanguage(nextLang)
      window.localStorage.setItem('i18currentLang', nextLang)
    }
  }

  return (
    <button className="icon-btn" onClick={changeLanguage}>
      <div className="i-mdi-translate"></div>
    </button>
  )
}

export default LanguageSwitch
