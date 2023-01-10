import { useDark } from '../hooks/useDark'

function App() {
  const [isDark, toggleDark] = useDark()

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button onClick={toggleDark} className="icon-btn">
        <div
          className={
            isDark ? 'i-mdi-moon-waxing-crescent' : 'i-mdi-white-balance-sunny'
          }></div>
      </button>
    </div>
  )
}

export default App
