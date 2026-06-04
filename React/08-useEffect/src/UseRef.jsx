
import { useState, useRef } from 'react'

//useref is a variable that stores the value it can change on every render 
//used to focus on inputfields or we want to store the hidden state 
//or on every rerender we want to store some value like previous state or something like that 
//here on updating the count variable we are increasing the val variable which is ref

const UseRef = () => {

    const [count, setcount] = useState(0)
    const val = useRef(0)

    val.current++;

    
  return (
    <div>

        <div>Count :- {count}</div>
        <div>val count:- {val.current}</div>
        <button onClick={()=>{setcount(count+1)}}>Update Count</button>
        


    </div>
  )
}

export default UseRef