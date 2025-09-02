 import './App.css'
import { useContext, useState } from 'react'
import { CountContext } from './context'
function App() {
 
    const [count, setCount] = useState(0)



  return (
    <>
         <CountContext.Provider value={count}>
        <Count  count = {count} setCount={setCount}/>
        </CountContext.Provider>
    </> 
  )
}

    function Count({ setCount}){

        return(

          <div>
            <Countrenderer/>
            <Buttons setCount={setCount}/>
          </div>
        )


    }

    function Countrenderer(){

      const count = useContext(CountContext);

      return(
        <div>
          Count is : {count}
        </div>
      )

    }

    function Buttons({ setCount}){

      const count = useContext(CountContext);

      return(
      <div>

          <button onClick={()=>{

              setCount(count+1)
          
          }}>Inc</button>

          <button onClick={()=>{

            setCount(count-1)

          }}>Dec</button>


      </div>

      )
    }

export default App
