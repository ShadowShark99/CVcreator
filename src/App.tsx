import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Work from './components/Work'
import Education from './components/Education'
import General from './components/General'
import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section>General</Section>
      <Section>Education</Section>
      <Section>Work</Section>
    </>
  )
}

export default App
