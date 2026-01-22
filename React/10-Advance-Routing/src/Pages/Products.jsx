import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Products = () => {
  return (
    

    <div className=' bg-sky-300 h-130 '>

    <div className='flex justify-center items-center text-4xl font-bold underline '>Products</div>

    <div className='flex gap-4'>
      
      
        <Link to={'Men'}>Men</Link>

        <Link to={'Women'}>Women</Link>

        <Link to={'Kids'}>Kids</Link>
        

    </div>
     
     <Outlet/>
    </div>

     
  )
}

export default Products