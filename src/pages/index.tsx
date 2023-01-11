import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import ApperanceSwitch from '~/components/ApperanceSwitch'
import LanguageSwitch from '~/components/languageSwitch'

function App() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center gap-4 pt-20">
      <a href="https://beta.reactjs.org" target="_blank" rel="noreferrer">
        <img
          src="/react.svg"
          className="hover:drop-shadow-react h-20"
          alt="React logo"
        />
      </a>
      <h1 className="font-mono text-xl">{t('Restarter')}</h1>
      <div className="flex items-center gap-2">
        <input
          className="w-35 border-1 h-10 rounded-md border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:border-gray-600 dark:bg-stone-900"
          placeholder={t('Home input placeholder') as string}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              navigate(`/example/todos/${e.currentTarget.value}`)
            }
          }}></input>
        <span>
          Or check the{' '}
          <Link
            to={'example/todos'}
            className="underline decoration-dashed underline-offset-2">
            todo list
          </Link>
        </span>
      </div>
      <div className="flex gap-3">
        <ApperanceSwitch />
        <LanguageSwitch />
        <a
          href="https://github.com/hyoban/react-starter"
          target="_blank"
          rel="noreferrer">
          <div className="i-mdi-github"></div>
        </a>
      </div>
    </div>
  )
}

export default App
