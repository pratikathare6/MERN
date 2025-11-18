import { useState } from 'react'
import Demo from './assets/demo'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    function inc(){

        setCount(count+1);

    }

  return (
    <>
        this is the count:{count}
        <Demo inc={inc}></Demo>
      
    </>
  )
}

export default App
