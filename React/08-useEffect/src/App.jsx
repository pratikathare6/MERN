 
import { useEffect,useState } from 'react'
import './App.css'
import UseRef from './UseRef'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
function App() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function updateA(){

    setA(a+1)

  }

  function updateB(){

    setB(b-1)

  }

  useEffect(()=>{

    console.log('useEffect is running...')

  },[a]) //here it is dependent on a when a chnage only when the clg is printed 


  

  return (
    <>
      <div>

            <p>this is a {a}</p>
            <p>this is b {b}</p>


            <button onClick={function(){
              updateA()
            }}
            
            
            >Update A</button>


            <button onClick={function(){
              updateB()

            }}>Update B</button>

       
      </div>
       
       <UseRef/>
       <UseMemo/>
       <UseCallback/>
    </>
  )
}

export default App
