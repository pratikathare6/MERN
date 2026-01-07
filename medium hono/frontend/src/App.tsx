 
import './App.css'

import {BrowserRouter,Route,Routes} from 'react-router-dom';

import {Signup} from './Pages/signup'
import {Signin} from './Pages/signin'
import {Blog} from './Pages/blog'


function App() {
 

  return (
    <>

        <BrowserRouter>
          <Routes>

            <Route path = '/signup' element={<Signup/>} />
            <Route path = '/signin' element={<Signin/>}/>
            <Route path = '/blog/:id' element = {<Blog/>}/>

          </Routes>
        </BrowserRouter>  
    </>
  )
}

export default App
