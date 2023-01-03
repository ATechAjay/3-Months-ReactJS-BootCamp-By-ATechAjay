import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  function darkModeHandle() {
    console.log('Clicked!!')
  }
  return (
    <button onClick={darkModeHandle} className={dark ? 'dark' : 'light'}>+</button>
  )
}

export default App
