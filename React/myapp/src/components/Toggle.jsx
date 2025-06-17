import React, { useState } from 'react'
import "./toggle.css";

const Toggle = () => {

    const[visi,change ] = useState(true) 

  return (
    <div className='tggl'>

            <button onClick={
                ()=> 
                {
                    change(!visi)
                }
                    
                } id='btn2'>visiblity</button>

            {visi &&<p>This is visible</p>}

    </div>
  )
}

export default Toggle
