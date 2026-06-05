import React, { useMemo } from "react";
import { useState } from "react";
//useMemo - used to memoizing the data that is expensive to calculate.
//suppose we have a calculation that is very expensive that runs on a every render
//so we can use the usememo in this case to cache (store) the calculation
//to avoid the expensive operation on every render.this takes a function and a array dependency
//used for performance optimization

const UseMemo = () => {
  //without useMemo

  const [count, setcount] = useState(0);
  const [name, setname] = useState("")


  const expensivecalc = () => {
    console.log("calculating without memo...");
    return  count * 2   ;
  };

  //with useMemo
  const result = useMemo(()=>{
    console.log('calculating with memo...')
    return count*2
  },[count])

  return (
    <div>
      <p>Without useMemo: {expensivecalc()}</p>
      <p>With useMemo: {result}</p>

      <button onClick={()=>{setcount(count+1)}}>Increase Count</button>

      <input type="text"
      placeholder="name"
      onChange={(e)=>{
        setname(e.target.value)
      }} //here when we type in the box the components rerenders but the useMemo remains same 
        //until we click on a increase count button.
      
      
      />
    </div>
  );
};

export default UseMemo;
