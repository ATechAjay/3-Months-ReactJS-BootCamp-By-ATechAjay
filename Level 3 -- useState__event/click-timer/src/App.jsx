import { useState } from 'react'
import './App.css'

function App() {
  const [_, setDate] = useState(`00:00:00`)

  const today = new Date();
  const h = today.getHours()
  const m = today.getMinutes()
  const s = today.getSeconds()

  function time() {
    setDate(`${h}:${m}:${s}`);
  }
  return (
    (<div>
      <h1>{`${h}:${m}:${s}`}</h1>
      <button onClick={time}>Get the latest time</button>
    </div>
    )

  )
}

export default App
