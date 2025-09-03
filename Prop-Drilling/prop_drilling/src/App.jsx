 import './App.css'
 
import { countatom } from './Store/Atoms/count'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
 
function App() {
  


  return (
    <>

        <RecoilRoot>
           <Count/>
          </RecoilRoot>

    </> 
  )
}

    function Count(){

        return(

          <div>
           
            <Countrenderer/>
            <Buttons/>
             
          </div>
        )


    }

    function Countrenderer(){

      const count = useRecoilValue(countatom);

      return(
        <div>
          Count is : {count}
        </div>
      )

    }

    function Buttons(){

      const [count, setCount] = useRecoilState(countatom);

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
