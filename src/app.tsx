import '@unocss/reset/tailwind.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import 'virtual:uno.css'
import routes from '~react-pages'

import './locales/i18n'

const router = createBrowserRouter(routes)

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
