import { Suspense } from 'react'
import { useRoutes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import 'uno.css'
import routes from '~react-pages'

import './index.css'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Router>
  )
}
export default App
