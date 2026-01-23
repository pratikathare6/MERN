import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()


  return (
    <div className='bg-red-300 py-4 flex gap-4 p-5 items-end justify-end'>

            <button className='border bg-orange-400 px-1 rounded'   

            onClick={()=>{

                navigate(-1)
            }}

            
            >Back</button>
            <button className='border bg-orange-400 px-1 rounded'

            onClick={()=>{

                navigate(+1)
            }}
                
                
            >Next</button>

            <button className='border bg-orange-400 px-1 rounded'

            onClick={()=>{

                navigate('/About')
            }}
                
                
            >Go to about</button>


    </div>
  )
}

export default Navbar2