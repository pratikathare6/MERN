import React from "react";

import { useState } from "react";

const AdvanceUsestate = () => {
  const [num, setnum] = useState({ name: "sample", age: "23" });

  function update() {
    //method 1 with destructuring
    //for reference variables we need to destructure then update
    let newnum = { ...num };
    newnum.name = "pratik";
    setnum(newnum);
  }

  const [arr, setarr] = useState([10, 20, 30]);

  function updatearr() {
    //method 1 
    //with array

    let arr2 = [...arr];
    arr2.push(40);
    setarr(arr2);
  }

    const [obj5, setobj5] = useState({name:'sample',age:'20'})

    function updateobj(){
        //method 2 with prev val

        setobj5(prev=>({...prev,name:'updated'}))

    }

    const [batch, setbatch] = useState(1)
      function batchupdate(){
        //batch update

          setbatch(prev=>(prev+1))
          setbatch(prev=>(prev+1))
          setbatch(prev=>(prev+1))
          
          
    }

  return (
    <div>
      <button onClick={update}>click</button>
      <p>{num.name}</p>

      <button onClick={updatearr}>click</button>
      <p>{arr}</p>

         <button onClick={updateobj}>click</button>
      <p>{obj5.name}</p>

         <button onClick={batchupdate}>batch Update</button>
      <p>{batch}</p>
    </div>
  );
};

export default AdvanceUsestate;
