
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Demo from './demo.jsx'

createRoot(document.getElementById('root')).render(
  <div>
   <App />
   <Demo />
  </div>
   
)
