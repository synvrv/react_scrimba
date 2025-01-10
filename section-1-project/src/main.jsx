import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
import './index.css'

function Myh1() {
  return (
    <h1 id="title">Fun facts about React</h1>
  )
}

function MainContent() {
  return (
    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}

root.render(
  <main>
    <img id="logo" src="/src/react-logo.png" alt="React logo"/>
    <Myh1 />
    <MainContent />
  </main>
)