import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
        <div>
          
          <Navbar/>
          
          
        </div>

        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>  
    </>
  )
}
export default App
