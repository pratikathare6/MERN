 
import './App.css'

function App() {
   
      function setitem(){

       localStorage.setItem('name','pratik');

        const a = {

            name: 'sarthak',
            age: '19'

        }

        console.log(a);

       localStorage.setItem('user2',JSON.stringify(a))

       console.log('without prsed. -',localStorage.getItem('user2'));
        console.log('prsed. -', JSON.parse(localStorage.getItem('user2')));
      }

      console.log(localStorage.getItem('name'));

      function removeitem(){

        localStorage.removeItem('name')

      }

      function removeall()
      {

          localStorage.clear()
      }

  return (
    <>        

      <div >
         
          
    

          <button onClick={()=>{

            setitem()

          }}
          >Add Item</button>

          <button onClick={()=>{
            removeitem()

          }}>Remove Item</button>

          <button onClick={()=>{

            removeall()

          }}>Clear All</button>

      </div>


        
      
    </>
  )
}

export default App
