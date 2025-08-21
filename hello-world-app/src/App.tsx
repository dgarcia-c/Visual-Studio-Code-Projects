import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Other from './components/Other'
import OneMoreTime from './components/OneMoreTime'

function App() {
  const [] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Greeting></Greeting>
      </div>
      <div className='card'>
        <Other></Other>
      </div>
      <div className='card'>
        <OneMoreTime></OneMoreTime>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
