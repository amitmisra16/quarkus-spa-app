import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import quarkusLogo from './assets/quarkus.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    const options = {
            method: 'GET',
            url: '/api/count'
        };
    axios.request(options).then((response) => {
        console.log(response.data)
            setCount(response.data)
        }).catch(function (error) {
            console.error(error);
      });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://quarklus.io" target="_blank">
          <img src={quarkusLogo} className="logo quarkus" alt="Quarkus logo" />
        </a>
      </div>
      <h1>Vite + React + Quarkus</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
