import { useState } from 'react'
import './App.css'

function App() {
  const latest = new Date().toLocaleTimeString();
  const [time, setTime] = useState(latest)
  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    setTime(now)
   
  }, 1000);

  return (
    <div className="parent">
      <h1>Auto Time Update</h1>
      <h2>{time}</h2>
    </div>
  )
}

export default App
