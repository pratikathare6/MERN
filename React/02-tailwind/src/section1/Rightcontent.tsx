import React from 'react'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
    
  return (
    <div id='right' className='h-135 m-2  w-2/3 flex overflow-x-auto rounded-4xl flex-nowrap p-8 gap-10 '>

            <div className='flex gap-2.5'>
              
               {props.users.map(function(elem,idx){

                      return (
                      <Rightcard key = {idx} id={idx} color={elem.color} img={elem.img} description={elem.description} tag= {elem.tag} />
                      )

               })}
            


            </div>
             


    </div>
  )
}

export default Rightcontent