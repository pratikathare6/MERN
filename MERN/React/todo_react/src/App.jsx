import {useState} from "react";
import './App.css'

function App() {
  const [todo,setTodos] = useState([{

      title: 'go to gym',
      name: 'toto'

  }]); 
   
  function addtodo(){

      setTodos([...todo,{

          title: 'new todo',
          name: 'desc of new todo'
      }])

  }

  return (
    <div>

      <button onClick={addtodo}>add a random todo</button>

      {todo.map(function(todo){

            return (

              <Todo title={todo.title} name ={todo.name}></Todo>
            )
      })} 

    </div>
  )

}

  function  Todo(props){

      return(
      <div>

        {props.title},
        {props.name}

      </div>)
  }

  
export default App
