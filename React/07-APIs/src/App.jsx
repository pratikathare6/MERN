 import axios from 'axios'
import './App.css'
import { useState } from 'react'
function App() {

  const [data, setdata] = useState([])

      
  const fetchdata = async ()=>{

        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        console.log(response.data)
        

         setdata(response.data);       
      
        

  }
 

  return (
    <>

        <div>


          <button onClick={fetchdata}>Get API</button>

          <div>

              {data.map(function(elem,idx){

                    return(

                      <p key={idx}> {idx} - {elem.title} </p>
                    )
              })}
               
          </div>


        </div>
     
    </>
  )
}

export default App
