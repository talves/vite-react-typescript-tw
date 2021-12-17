import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center">
      <header className="App-header">
        <img src={logo} className="app-logo h-40 w-40 inline" alt="logo" />
        <p className="font-bold text-2xl text-blue-900">Hello Vite + React + Tailwindcss!</p>
        <p className="pt-10">
          <button type="button" className='bg-blue-900 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p className="pt-10">
          I used yarn, but it would be easy to use npm also.<br/>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="pt-10">
          <a
            className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
