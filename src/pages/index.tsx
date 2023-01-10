import { useNavigate } from 'react-router'

import reactLogo from '../assets/react.svg'
import { useDark } from '../hooks/useDark'

function App() {
  const [isDark, toggleDark] = useDark()
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center gap-4 py-4">
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img
          src={reactLogo}
          className="hover:drop-shadow-react h-20"
          alt="React logo"
        />
      </a>
      <h1 className="text-xl">react starter</h1>
      <input
        className="w-35 border-1 h-10 rounded-md border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:border-gray-600 dark:bg-stone-900"
        placeholder="Enter a user id"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate(`/users/${e.currentTarget.value}`)
          }
        }}></input>
      <div className="flex gap-3">
        <button onClick={toggleDark} className="icon-btn">
          <div
            className={
              isDark
                ? 'i-mdi-moon-waxing-crescent'
                : 'i-mdi-white-balance-sunny'
            }></div>
        </button>
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
