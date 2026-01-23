 
import './App.css'
import Navbar from './Navbar'
import { useState } from 'react'
function App() {
 
  const [Theme, setTheme] = useState('Light')

  return (
    <>

          <div><Navbar Theme={Theme} setTheme={setTheme}/></div>
      
    </>
  )
}

export default App
