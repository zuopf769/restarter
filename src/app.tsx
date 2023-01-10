import '@unocss/reset/tailwind.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import 'uno.css'
import routes from '~react-pages'

const router = createBrowserRouter(routes)

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}
export default App
