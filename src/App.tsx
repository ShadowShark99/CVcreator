import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Work from './components/Work'
import Education from './components/Education'
import General from './components/General'
import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)
  const generalFields = ["Name", "E-mail", "Phone"];
  const educationFields = ["School", "Major", "Start Date", "GPA"];
  const workFields = ["Company", "Position","Responsibilities","Start Date","End Date"];
  return (
    <div className="screen">
      <Section fields={generalFields}>General</Section>
      <Section fields={educationFields} isExpandable={true}>Education</Section>
      <Section fields={workFields} isExpandable={true}>Work</Section>
    </div>
  )
}

export default App
