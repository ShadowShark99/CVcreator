import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Work from './components/Work'
import Education from './components/Education'
import General from './components/General'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <General></General>
      <Education></Education>
      <Work></Work>
    </>
  )
}

export default App
