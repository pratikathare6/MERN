//React Returns
import React, { useMemo } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

      //usestate hook - used to track the state of the component 
      const [title, setTitle] = useState("my react app1")
      const [todos,setTodos] = useState([{

        id: 1,
        title: "todo 1"
      
      },{

        id: 2,
        title: "todo 2"
      }])

      function Todo(id,title){

        return(
        <div>

              <h1>{id}</h1>
              <h2>{title}</h2>


        </div>
        )
      }

        function setthename(){

            setTitle('read me'+Math.random());
        }
        

    return (

      <>
         <button style={{background: "tomato"}}  onClick={setthename}>Click to change the header</button>

        <Header title={title}></Header>
        <Header title="my react app1"></Header>


        {todos.map(function(todo){
          return <Todo title={todo.title} id={todo.id} />
          
        })}

        
      </>
      


    )
}

    //use memo hook used when only needed component should be rerenderd 

      const Header = React.memo(  function Header({title}){

       return(

          <div>
            {title}
          </div>

       )

    }
)

  

    

 

export default App
