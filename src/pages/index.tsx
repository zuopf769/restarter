import reactLogo from '../assets/react.svg'
import { useStore } from '../stores/useStore'
import './App.css'

function App() {
  const { count, inc } = useStore()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/unocss/unocss" target="_blank">
          <img
            src="https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg"
            alt="UnoCSS logo"
            className="logo unocss"
          />
        </a>
      </div>
      <h1>Vite + React + UnoCSS</h1>
      <div className="card">
        <button onClick={inc}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
