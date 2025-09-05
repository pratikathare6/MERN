 
import './App.css'

function App() {
 

  return (
    <>
        <Cardwarpper/>
    </>
  )
}



function Cardwarpper({childern}){

  return(

    <div style={{ border:'2px solid black', height:'200px', width:'200px', margin:'auto', textAlign:'center'}}>

      <p>hii there</p>
      {childern}

    </div>

  )

}
 
export default App
