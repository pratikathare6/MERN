import { useState } from 'react';
import { useEffect } from 'react'; 
 
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'

import {Counterfn} from './components/counter'

/*
function App() {

    const [todos, setTodos] = useState([]);
    
useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch todos');
                }
                const json = await res.json();
                setTodos(json.todos || json); // Handle both formats
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []); // Empty dependency array means run once on mount
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
      <Counterfn/>
    </div>
  )
}
*/

    function App(){
      
      return(

          <div>

            
            <Counterfn/>
             

          </div>

      )
    }
export default App
