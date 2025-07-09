

import './App.css'
import Section from './components/Section'
import Clock from './components/Clock'

function App() {
  const generalFields = ["Name", "E-mail", "Phone"];
  const educationFields = ["School", "Major", "Start Date", "GPA"];
  const workFields = ["Company", "Position","Responsibilities","Start Date","End Date"];
  return (
    
    <div className="screen">
      <Clock></Clock>
      <Section fields={generalFields}>General</Section>
      <Section fields={educationFields} isExpandable={true}>Education</Section>
      <Section fields={workFields} isExpandable={true}>Work</Section>
    </div>
  )
}

export default App
