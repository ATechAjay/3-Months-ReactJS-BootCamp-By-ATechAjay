import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }
  return (
    <div className='parent'>
      <h1>{count}</h1>
      <div className='btn'>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>
    </div>
  )
}

export default App
