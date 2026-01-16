 import React from 'react'
import { useState } from 'react';

 //implementation of 2 way binding 
 const Forms2 = () => {

    const [title, settitle] = useState("")

    const preventsubmit=(e)=>{

        e.preventDefault();


        console.log(title)

        settitle("")

    }




   return (
    <div> 

        <form onSubmit={function(e){

            preventsubmit(e)

        }} action="">


            <input type="text" 

            value={title}
            onChange={(e)=>{

                settitle(e.target.value)
            }}


            />

            <button>Submit</button>


        </form>



     </div>
   )
 }
 
 export default Forms2