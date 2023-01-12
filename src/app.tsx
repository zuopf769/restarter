import { ConfigProvider, theme } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import routes from '~react-pages'

import { useDark } from '~/hooks/useDark'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '~/locales/i18n'
import '~/main.css'

const i18nToLocale = {
  en: enUS,
  zh: zhCN,
}

const router = createBrowserRouter(routes)

const App = () => {
  const [isDark] = useDark()
  const [, i18n] = useTranslation()

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      locale={i18nToLocale[i18n.language as keyof typeof i18nToLocale] ?? enUS}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default App
