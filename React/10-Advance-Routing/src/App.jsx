import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Footer from './Components/Footer'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/kids'
import Notfound from './Pages/Notfound'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import Navbar2 from './Components/Navbar2'
function App() {
 

  return (
    <>

        <div><Navbar/></div>
        <div><Navbar2/></div>

        <Routes>

        <Route path='/' element={<Home/>} >   </Route>
        <Route path='/Products' element={<Products/>}>

          <Route path='Men' element= {<Men/>}/>

          <Route path='Women' element={<Women/>}></Route>

          <Route path='Kids' element={<Kids/>}></Route>

        
        </Route>

        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Courses/:id' element={<CourseDetails/>}></Route>



        <Route path='/About' element={<About/>}></Route>

       
        <Route path='*' element={<Notfound/>}></Route>
        </Routes>

        <div><Footer/></div>
          
    </>
  )
}

export default App
