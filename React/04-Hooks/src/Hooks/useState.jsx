import React from 'react'
import { useState } from 'react'

const UseStatehook = () => {


    const [num, setnum] = useState(10)

    function Increase(){

        setnum(num+1);
    }

    function Decrease(){

        setnum(num-1);
    }

    function Increase5(){

        setnum(num+5);
    }

  return (

    <div>
            <p>the count is {num}</p>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease </button>
            <button onClick={Increase5}>Increase 5 </button>

    </div>
  )
}

export default UseStatehook