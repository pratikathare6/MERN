import { useState,useEffect } from "react";

import '../App.css'


export function Counterfn(){
const [counter,setCounter] = useState(0);

    useEffect(()=>{

        console.log("counter is counting");

    },[counter])

    const incrementcounter = () =>{

    setCounter(counter + 1);

}

    const decrementcounter = ()=>{

        if(counter> 0){

     setCounter(counter -1 );
        }
}

 return (

        <div className="main">

        <p>{counter}</p>
        <button style={{background:'tomato'}} onClick={incrementcounter}>inc</button>
        <button style={{background:'lightgreen'}} onClick={decrementcounter}>dec</button>

        </div>
     

 )
}



